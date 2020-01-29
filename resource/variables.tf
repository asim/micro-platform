variable "resource_namespace" {
  description = "Shared resources kubernetes namespace"
  default     = "resource"
}

variable "domain_name" {
  description = "Domain name of the platform (e.g. micro.mu)"
  default     = "micro.mu"
}

variable "image_pull_policy" {
  description = "Kubernetes image pull policy for control plane deployments"
  default     = "Always"
}

variable "micro_image" {
  description = "Micro docker image"
  default     = "micro/micro"
}

variable "etcd_image" {
  description = "etcd docker image"
  default     = "gcr.io/etcd-development/etcd:v3.3.18"
}

variable "nats_image" {
  description = "nats-io docker image"
  default     = "nats:2.1.0-alpine3.10"
}

variable "netdata_image" {
  description = "Micro customised netdata image"
  default     = "micro/netdata:latest"
}

variable "cockroachdb_image" {
  description = "CockroachDB Image"
  default     = "cockroachdb/cockroach:v19.2.1"
}

variable "cockroachdb_storage" {
  description = "CockroachDB Kubernetes storage request"
  default     = "10Gi"
}
