locals {
  common_labels = {
    "micro" = "runtime"
    "name"  = var.service_name
  }
  common_annotations = {
    "name"    = "go.micro.${var.service_name}"
    "version" = "latest"
    "source"  = "github.com/micro/micro"
    "owner"   = "micro"
    "group"   = "micro"
  }
  common_env_vars = {
    "MICRO_LOG_LEVEL"        = "debug"
    "MICRO_BROKER"           = "nats"
    "MICRO_BROKER_ADDRESS"   = "nats-cluster.${var.resource_namespace}.svc"
    "MICRO_REGISTRY"         = "etcd"
    "MICRO_REGISTRY_ADDRESS" = "etcd-cluster.${var.resource_namespace}.svc"
  }
}

resource "kubernetes_service" "network_service" {
  metadata {
    name      = "micro-${var.service_name}"
    namespace = var.network_namespace
    labels    = merge(local.common_labels, var.extra_labels)
  }
  spec {
    port {
      port     = var.service_port
      protocol = var.service_protocol
    }
    selector = merge(local.common_labels, var.extra_labels)
  }
}

resource "kubernetes_deployment" "network_deployment" {
  metadata {
    name      = "micro-${var.service_name}"
    namespace = var.network_namespace
    labels    = merge(local.common_labels, var.extra_labels)
  }
  spec {
    replicas = var.service_replicas
    selector {
      match_labels = merge(local.common_labels, var.extra_labels)
    }
    template {
      metadata {
        labels = merge(local.common_labels, var.extra_labels)
      }
      spec {
        container {
          name              = var.service_name
          args              = [var.service_name]
          image             = var.micro_image
          image_pull_policy = var.image_pull_policy
          port {
            name           = "${var.service_name}-port"
            container_port = var.service_port
            protocol       = var.service_protocol
          }
          dynamic "env" {
            for_each = merge(local.common_env_vars, var.extra_env_vars)
            content {
              name  = env.key
              value = env.value
            }
          }
        }
      }
    }
  }
}