module github.com/micro/platform/web

go 1.13

require (
	github.com/dghubble/gologin/v2 v2.2.0
	github.com/google/go-github/v29 v29.0.3
	github.com/micro/go-micro/v2 v2.2.1-0.20200313221509-609f4826b35d
	github.com/micro/micro/v2 v2.2.1-0.20200314171200-6192587db534
	github.com/micro/platform/service v0.0.0-20200313185528-4a795857eb73
	golang.org/x/oauth2 v0.0.0-20200107190931-bf48bf16ab8d
)

replace github.com/micro/platform/service => ../service
