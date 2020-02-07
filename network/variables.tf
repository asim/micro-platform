variable "network_namespace" {
  description = "Network Kubernetes namespace"
  type        = string
  default     = "network"
}

variable "resource_namespace" {
  description = "Shared Infrastructure Kubernetes namespace"
  type        = string
  default     = "resource"
}

variable "cloudflare_account_id" {
  description = "Cloudflare Account ID (For connecting to the Cloudflare API)"
  type        = string
}

variable "cloudflare_api_token" {
  description = "Cloudflare API token (For connecting to the Cloudflare API)"
  type        = string
}

variable "cloudflare_kv_namespace_id" {
  description = "Cloudflare workers KV namespace ID"
  type        = string
}

variable "cloudflare_kv_namespace_id_runtime" {
  description = "Cloudflare workers KV namespace ID (runtime)"
  type        = string
}

variable "cloudflare_dns_zone_id" {
  description = "Cloudflare DNS Zone ID"
  type        = string
}

variable "domain_names" {
  description = "List of valid domain names for network services"
  type        = list(string)
  default     = ["micro.mu", "cloud.micro.mu"]
}
