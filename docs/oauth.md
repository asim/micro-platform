# Oauth 

This document will outline the proposed implementation for the oauth flow in micro.

## Requirements
* Micro Web is public, users can browse apps and are only forced to login when they click on an app which is authenticated.
* To be consistent with backend services, auth can be enabled on a service by enabling the env var MICRO_AUTH
* When a user loads a web srv and isn't authenticated, rather than returning a 401, the user should be redirected to login.
* Login supports multiple oauth providers, micro provides a built in provider as a zero-dep experience. The default provider does simple username/password authentication.
* Additional Oauth providers can be deployed by deploying the oauth service and configuring it to work with different providers
* Login web will check for providers by querying services matching the following format: go.micro.srv.oauth.*

## Implementation

We will implement the following new services

### go.micro.srv.oauth
This service will be configured using the following variables (examples provided):
MICRO_ADDRESS=go.micro.srv.oauth.github # Used to namespace the service, allowing for multiple oauth providers
OAUTH_PROVIDER=GitHub # Used by the frontend when rendering the oauth options
OAUTH_CLIENT_ID=barfoo # The oauth provider client id
OAUTH_CLIENT_SECRET=foobar # The oauth provider client secret
OAUTH_AUTH_URL=https://github.com/login/oauth/authorize # The auth url specified by the oauth provider
OAUTH_TOKEN_URL=https://github.com/login/oauth/access_token # The token url specified by the oauth provider

### go.micro.srv.oauth.basic
This service will implement the oauth service interface, supporting basic username/password authentication

### go.micro.web.oauth.basic
The web interface for the basic oauth flow. This will simply provide a basic login/signup flow.

### go.micro.web.user.login?
The web interface the user is redirected to when they need to login / signup. The various oauth options are presented to the user.

We will also update the go-micro auth-wrapper to redirect rather than 401 if the service is of type web.
