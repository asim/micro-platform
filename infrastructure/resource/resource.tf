resource "kubernetes_namespace" "resource" {
  metadata {
    name = var.resource_namespace
  }
}

locals {

}