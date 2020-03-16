# Platform

The micro platform is a fully managed platform for microservices development.

## Overview

The platform provides **Micro as a Service** as a fully managed solution. The platform is 
bootstrapped onto Kubernetes on the major cloud providers, including load balancing and 
dns management. This repository serves as the entrypoint and single location for all platform related source 
code and documentation.

The platform builds on the [Micro](https://github.com/micro/micro) runtime and includes the features defined below.

## Features

The features which will be included in the platform

- **Cloud Automation** - Full terraform automation to bootstrap Micro platform
- **Kubernetes Native** - Built to run on Kubernetes
- **Multi-Cloud** - Deploy across multiple clouds providers and regions
- **Account Management** - GitHub account management via teams
- **Alerting** - Event notification and alerting via email/sms/slack
- **Quotas** - Metering and service quotas for teams
- **Dashboard** - A full UX experience via a web dashboard
- **GitOps** - Source to Running via GitHub actions

## Usage

To bootstrap the platform, create a [platforms.yaml](./platforms-test.yaml), and prepare a AWS S3 bucket
for [terraform state storage](https://www.terraform.io/docs/backends/types/s3.html). Then run 
`./platform infra plan -c platforms.yaml` and `./platform infra apply -c platforms.yaml`.
To destroy, `./platform infra destroy -c platforms.yaml`.

Configuration options can be set with viper, for example
[https://github.com/micro/platform/blob/cc27173/cmd/infra.go#L44](the state-store flag) can be set by
setting the environment variable `MICRO_STATE_STORE`.

See the [docs](docs) for more info.

## LICENSE

See [LICENSE](LICENSE) which makes use of [Polyform Strict](https://polyformproject.org/licenses/strict/1.0.0/). 
Email us for commercial use at [sales@micro.mu](mailto:sales@micro.mu).
