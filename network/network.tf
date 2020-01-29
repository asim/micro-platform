resource "kubernetes_namespace" "network" {
  metadata {
    name = var.network_namespace
  }
}

resource "kubernetes_secret" "cloudflare_credentials" {
  metadata {
    name      = "cloudfare-credentials"
    namespace = kubernetes_namespace.network.id
  }
  data = {
    "CF_ACCOUNT_ID"           = var.cloudflare_account_id
    "CF_API_TOKEN"            = var.cloudflare_api_token
    "KV_NAMESPACE_ID"         = var.cloudflare_kv_namespace_id
    "KV_NAMESPACE_ID_RUNTIME" = var.cloudflare_kv_namespace_id_runtime
    "MICRO_MU_DNS_ZONE_ID"    = var.cloudflare_dns_zone_id
  }
}

// One day this can just be a for_each ["list", "of", "services"]
// https://github.com/hashicorp/terraform/issues/10462#issuecomment-575738220
module "api" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name = "api"
  service_port = 443
  // TODO: Load Balancers
  service_type = "LoadBalancer"

  extra_env_vars = {
    "MICRO_ENABLE_STATS"  = "true"
    "MICRO_ENABLE_ACME"   = "true"
    "MICRO_ACME_PROVIDER" = "certmagic"
    "MICRO_ACME_HOSTS"    = "*.micro.mu,*.cloud.micro.mu,micro.mu"
    "CF_API_TOKEN"        = var.cloudflare_api_token
    "CF_ACCOUNT_ID"       = var.cloudflare_account_id
    "KV_NAMESPACE_ID"     = var.cloudflare_kv_namespace_id
  }
}

module "broker" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name = "broker"
  service_port = 8001
}

module "debug_web" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name       = "debug-web"
  create_k8s_service = false

  extra_env_vars = {
    "MICRO_NETDATA_URL" = "http://netdata.${var.resource_namespace}.svc:19999"
  }
}

module "debug" {
    source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name       = "debug"
  create_k8s_service = false
}

module "monitor" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name       = "monitor"
  create_k8s_service = false
}

module "network_api" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name       = "network-api"
  create_k8s_service = false

  extra_env_vars = {
    "MICRO_SERVER_ADDRESS" = "0.0.0.0:9090"
  }
}

module "proxy" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name = "proxy"
  service_port = 8081
}

module "registry" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name = "registry"
  service_port = 8000
}

module "router" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name = "router"
  service_port = 8084
}

module "store" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name       = "store"
  create_k8s_service = false

  extra_env_vars = {
    "MICRO_STORE_BACKEND" = "cockroach"
    "MICRO_STORE_NODES"   = "host=cockroachdb-public.${var.resource_namespace}.svc port=26257 sslmode=disable user=root"
  }
}

module "web" {
  source = "./service"

  resource_namespace = var.resource_namespace
  network_namespace  = kubernetes_namespace.network.id

  service_name = "web"
  service_port = 443
  service_type = "LoadBalancer"

  extra_env_vars = {
    "MICRO_ENABLE_ACME"   = "true"
    "MICRO_ACME_PROVIDER" = "certmagic"
    "MICRO_ACME_HOSTS"    = "*.micro.mu,*.cloud.micro.mu,micro.mu"
    "CF_API_TOKEN"        = var.cloudflare_api_token
    "CF_ACCOUNT_ID"       = var.cloudflare_account_id
    "KV_NAMESPACE_ID"     = var.cloudflare_kv_namespace_id
  }
}
