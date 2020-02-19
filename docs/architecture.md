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
- More soon...

## Design

The platform layers on the existing open source tools and there's a clear separation of concerns.

<img src="images/architecture.png" />

Ultimately the breakdown is

- Platform - Hosted product and commercially licensed (Micro as a Service)
- Micro - Runtime for services - Open source Apache 2.0 licensed
- Go Micro - Framework for development - Open source Apache 2.0 licensed
