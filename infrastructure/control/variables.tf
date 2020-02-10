variable "control_namespace" {
  description = "Control plane Namespace"
  default     = "control"
}

variable "resource_namespace" {
  description = "Shared resources kubernetes namespace"
  default     = "resource"
}

variable "replicas" {
  description = "Replicas of control plane deployments"
  default     = 1
}

variable "micro_image" {
  description = "Micro docker image"
  default     = "micro/micro"
}

variable "image_pull_policy" {
  description = "Kubernetes image pull policy for control plane deployments"
  default     = "Always"
}

variable "domain_name" {
  description = "Domain name of the platform (e.g. micro.mu)"
  default     = "micro.mu"
}

variable "slack_token" {
  description = "Slack token for micro bot"
}
