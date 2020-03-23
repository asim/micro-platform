provider "azurerm" {
  version = "~>2.2"
  features {}
}

provider "azuread" {
  version = "~>0.8"
}

resource "random_id" "k8s_name" {
  byte_length = 2
}

resource "azuread_application" "k8s" {
  name = "micro-${var.region}-k8s-${random_id.k8s_name.hex}"
    provisioner "local-exec" {
    command = "sleep 30"
  }
}

resource "azuread_service_principal" "k8s" {
  application_id = azuread_application.k8s.id

  provisioner "local-exec" {
    command = "sleep 30"
  }
}

resource "random_password" "service_principle_secret" {
  length  = 32
  special = false
}

resource "azuread_service_principal_password" "k8s" {
  service_principal_id = azuread_service_principal.k8s.id
  value                = random_password.service_principle_secret.result
    provisioner "local-exec" {
    command = "sleep 10"
  }
}

resource "azurerm_resource_group" "k8s" {
  name     = "micro-${var.region}-${random_id.k8s_name.hex}"
  location = var.location
}

resource "azurerm_kubernetes_cluster" "k8s_cluster" {
  name                = "micro-${var.region}-${random_id.k8s_name.hex}"
  location            = azurerm_resource_group.k8s.location
  resource_group_name = azurerm_resource_group.k8s.name
  dns_prefix          = "micro-${var.region}-${random_id.k8s_name.hex}"

  addon_profile {
    kube_dashboard {
      enabled = false
    }
  }

  default_node_pool {
    name       = "default${random_id.k8s_name.dec}"
    node_count = 5
    vm_size    = "Standard_D2_v2"
  }

  service_principal {
    client_id     = azuread_service_principal.k8s.application_id
    client_secret = azuread_service_principal_password.k8s.value
  }
}

output "cluster_name" {
  value = azurerm_kubernetes_cluster.k8s_cluster.name
}

output "kubeconfig" {
  value     = azurerm_kubernetes_cluster.k8s_cluster.kube_admin_config_raw
  sensitive = true
}
