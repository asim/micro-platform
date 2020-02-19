# Architecture

The platform architecture doc describes what the platform is, what its composed of and how its built.

## Overview

The platform serves as a fully managed platform for microservices development. It builds on go-micro 
and the micro runtime to provide **Micro as a Service**. It adds additionally functionality on top for 
infrastructure automation, account management, billing, alerting, etc.

## Features

- **Cloud Automation** - Full terraform automation to bootstrap platform
- **Account Management** - GitHub account management via teams
- **Alerting** - Event notification and alerting via email/sms/slack
- **Billing** - Metered billing of services used
- **Dashboard** - A full UX experience via a web dashboard
- **Multi-Cloud** - Ability to manage and deploy services across multiple clouds and regions
- **GitOps** - Source to Running via GitHub actions
- **K8s Native** - Built to run on Kubernetes
- More soon...

## Design

The platform layers on the existing open source tools and there's a clear separation of concerns.

The breakdown is as follows:

- Platform - Hosted product and commercially licensed (Micro as a Service)
- Micro - Runtime for services - Open source Apache 2.0 licensed
- Go Micro - Framework for development - Open source Apache 2.0 licensed

### Diagram

The interaction between these layers is clearly delineated. Every layer builds on the next with only 
one way interaction. Platform => Runtime => Framework.

<img src="images/architecture.png" />

### Framework

The framework is geared towards developers writing services and primarily focused on Go development. It provides 
abstractions for the underlying infrastructure and is Apache 2.0 licensed as a completely open pluggable standalone 
framework.

### Runtime

The micro runtime builds on the framework to provide service level abstractions for each concern. It provides a 
runtime agnostic layer thats gRPC based so that we can build on it. It's effectively a programmable foundation. 
By using the framework it becomes pluggable and agnostic of infrastructure. The framework should not reference 
the runtime.

## Platform

The platform builds on the runtime. It's a fully managed solution that provides automation to bootstrap the runtime 
and run it across muliple cloud providers and regions globally. Where the runtime focuses on one addressable 
environment, the platform extends into multiple independent environments and namespaces that can be managed in one place.

