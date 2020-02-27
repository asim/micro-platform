module github.com/micro/platform/web

go 1.13

require (
	github.com/dghubble/gologin/v2 v2.2.0
	github.com/google/go-github/v29 v29.0.3
	github.com/grpc-ecosystem/grpc-gateway v1.9.0 // indirect
	github.com/micro/go-micro/v2 v2.1.3-0.20200226134006-e6e00c11781a
	github.com/micro/micro/v2 v2.1.2-0.20200225222744-44a2e0a2245d
	github.com/micro/platform/service v0.0.0-00010101000000-000000000000
	golang.org/x/oauth2 v0.0.0-20200107190931-bf48bf16ab8d
)

replace github.com/micro/platform/service => ../service
