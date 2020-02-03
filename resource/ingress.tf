locals {
  ingress_nginx_labels = {
    "app.kubernetes.io/name"    = "ingress-nginx"
    "app.kubernetes.io/part-of" = "ingress-nginx"
  }
}

resource "kubernetes_config_map" "nginx_configuration" {
  metadata {
    name      = "nginx-configuration"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
  }
  data = merge(
    {},
    var.in_aws ? { "use-proxy-protocol" = "true" } : {},
  )
}

resource "kubernetes_config_map" "tcp_services" {
  metadata {
    name      = "tcp-services"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
  }
}

resource "kubernetes_config_map" "udp_services" {
  metadata {
    name      = "udp-services"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
  }
}

resource "kubernetes_service_account" "nginx_ingress" {
  metadata {
    name      = "nginx-ingress"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
  }
}

resource "random_pet" "nginx_ingress_cluster_role" {
  prefix    = "nginx-ingress"
  separator = "-"
  length    = 2
}

resource "kubernetes_cluster_role" "nginx_ingress" {
  metadata {
    name   = random_pet.nginx_ingress_cluster_role.id
    labels = local.ingress_nginx_labels
  }
  rule {
    api_groups = [""]
    resources = [
      "configmaps",
      "endpoints",
      "nodes",
      "pods",
      "secrets",
    ]
    verbs = [
      "list",
      "watch",
    ]
  }
  rule {
    api_groups = [""]
    resources  = ["nodes"]
    verbs      = ["get"]
  }
  rule {
    api_groups = [""]
    resources  = ["services"]
    verbs      = ["get", "list", "watch"]
  }
  rule {
    api_groups = [""]
    resources  = ["events"]
    verbs      = ["create", "patch"]
  }
  rule {
    api_groups = ["extensions", "networking.k8s.io"]
    resources  = ["ingresses"]
    verbs      = ["get", "list", "watch"]
  }
  rule {
    api_groups = ["extensions", "networking.k8s.io"]
    resources  = ["ingresses/status"]
    verbs      = ["update"]
  }
}

resource "kubernetes_role" "nginx_ingress" {
  metadata {
    name      = "nginx-ingress"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
  }
  rule {
    api_groups = [""]
    resources = [
      "configmaps",
      "pods",
      "secrets",
      "namespaces",
      "endpoints"
    ]
    verbs = ["get"]
  }
  rule {
    api_groups     = [""]
    resources      = ["configmaps"]
    resource_names = ["ingress-controller-leader-nginx"]
    verbs          = ["get", "update"]
  }
  rule {
    api_groups = [""]
    resources  = ["configmaps"]
    verbs      = ["create"]
  }
}

resource "kubernetes_role_binding" "nginx_ingress" {
  metadata {
    name      = "nginx-ingress"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "Role"
    name      = kubernetes_role.nginx_ingress.metadata.0.name
  }
  subject {
    kind      = "ServiceAccount"
    name      = kubernetes_service_account.nginx_ingress.metadata.0.name
    namespace = kubernetes_namespace.resource.id
  }
}

resource "kubernetes_cluster_role_binding" "nginx_ingress" {
  metadata {
    name   = random_pet.nginx_ingress_cluster_role.id
    labels = local.ingress_nginx_labels
  }
  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = kubernetes_cluster_role.nginx_ingress.metadata.0.name
  }
  subject {
    kind = "ServiceAccount"
    name = kubernetes_service_account.nginx_ingress.metadata.0.name
  }
}

resource "kubernetes_deployment" "nginx_ingress" {
  metadata {
    name      = "nginx-ingress-controller"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
  }
  spec {
    replicas = 1
    selector {
      match_labels = local.ingress_nginx_labels
    }
    template {
      metadata {
        labels = local.ingress_nginx_labels
      }
      spec {
        termination_grace_period_seconds = 300
        service_account_name             = kubernetes_service_account.nginx_ingress.metadata.0.name
        container {
          name  = "nginx-ingress-controller"
          image = var.nginx_ingress_image
          args = [
            "/nginx-ingress-controller",
            "--configmap=${kubernetes_namespace.resource.id}/${kubernetes_config_map.nginx_configuration.metadata.0.name}",
            "--tcp-services-configmap=${kubernetes_namespace.resource.id}/${kubernetes_config_map.tcp_services.metadata.0.name}",
            "--udp-services-configmap=${kubernetes_namespace.resource.id}/${kubernetes_config_map.udp_services.metadata.0.name}",
            "--publish-service=${kubernetes_namespace.resource.id}/ingress-nginx",
            "--annotations-prefix=nginx.ingress.kubernetes.io",
          ]
          security_context {
            allow_privilege_escalation = true
            capabilities {
              drop = ["ALL"]
              add  = ["NET_BIND_SERVICE"]
            }
            run_as_user = 101
          }
          env {
            name = "POD_NAME"
            value_from {
              field_ref {
                field_path = "metadata.name"
              }
            }
          }
          env {
            name = "POD_NAMESPACE"
            value_from {
              field_ref {
                field_path = "metadata.namespace"
              }
            }
          }
          port {
            name           = "http"
            container_port = 80
            protocol       = "TCP"
          }
          port {
            name           = "https"
            container_port = 443
            protocol       = "TCP"
          }
          liveness_probe {
            failure_threshold = 3
            http_get {
              path   = "/healthz"
              port   = 10254
              scheme = "HTTP"
            }
            initial_delay_seconds = 10
            period_seconds        = 10
            success_threshold     = 1
            timeout_seconds       = 10
          }
          readiness_probe {
            failure_threshold = 3
            http_get {
              path   = "/healthz"
              port   = 10254
              scheme = "HTTP"
            }
            period_seconds    = 10
            success_threshold = 1
            timeout_seconds   = 10
          }
          lifecycle {
            pre_stop {
              exec {
                command = ["/wait-shutdown"]
              }
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nginx_ingress" {
  count = var.in_aws ? 1 : 0
  metadata {
    name      = "ingress-nginx"
    namespace = kubernetes_namespace.resource.id
    labels    = local.ingress_nginx_labels
    annotations = merge({},
      var.in_aws ? {
        "service.beta.kubernetes.io/aws-load-balancer-proxy-protocol" = "*"
        // Ensure the ELB idle timeout is less than nginx keep-alive timeout. By default
        // NGINX keep-alive is set to 75s. If using WebSockets, the value will need to be
        // increased to '3600' to avoid any potential issues.
        "service.beta.kubernetes.io/aws-load-balancer-connection-idle-timeout" = "60"
      } : {},
    )
  }
  spec {
    external_traffic_policy = var.in_aws ? "Cluster" : "Local"
    type                    = "LoadBalancer"
    selector                = local.ingress_nginx_labels
    port {
      name        = "http"
      port        = 80
      target_port = "http"
      protocol    = "TCP"
    }
    port {
      name        = "https"
      port        = 443
      target_port = "https"
      protocol    = "TCP"
    }
  }
}
