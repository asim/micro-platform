module github.com/micro/platform/web

go 1.13

require (
        github.com/dghubble/gologin/v2 v2.2.0
        github.com/google/go-github/v29 v29.0.3
        github.com/grpc-ecosystem/grpc-gateway v1.9.0 // indirect
        github.com/micro/go-micro/v2 v2.0.1-0.20200212105717-d76baf59de2e
        github.com/micro/micro/v2 v2.0.1-0.20200212111115-20492755faee
        github.com/micro/platform/service v0.0.0-00010101000000-000000000000
        golang.org/x/oauth2 v0.0.0-20200107190931-bf48bf16ab8d
)

replace github.com/micro/platform/service => ../service
