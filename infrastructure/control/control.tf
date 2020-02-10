resource "kubernetes_namespace" "control" {
  metadata {
    name = var.control_namespace
  }
}

locals {
  common_labels = {
    "micro" = "runtime"
  }
  common_annotations = {
    "version" = "latest"
    "source"  = "github.com/micro/micro"
    "owner"   = "micro"
    "group"   = "micro"
  }
  common_env_vars = {
    "MICRO_LOG_LEVEL"        = "DEBUG"
    "MICRO_BROKER"           = "nats"
    "MICRO_BROKER_ADDRESS"   = "nats-cluster.${var.resource_namespace}.svc"
    "MICRO_REGISTRY"         = "etcd"
    "MICRO_REGISTRY_ADDRESS" = "etcd-cluster.${var.resource_namespace}.svc"
  }
}
