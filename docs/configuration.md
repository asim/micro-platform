# Configuration

This document serves as the place for extended configuration

## Overview

The platform is automated through terraform and requires certain environmental config before it 
can be used, including the configuration for the underlying services and their access to resources 
like github and cloudflare.

## Dependencies

- Terraform
- Github
- ...

## Environment

A few things we need

- FRONTEND_ADDRESS - the URL the dashboard is served on
- GITHUB_TEAM_ID - The team which has access
- GITHUB_OAUTH_CLIENT_ID - github oauth client id
- GITHUB_OAUTH_CLIENT_SECRET - github oauth client secret
- GITHUB_OAUTH_REDIRECT_URL - github oauth redirect url

## Usage

Coming soon...
