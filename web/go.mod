module github.com/micro/platform/web

go 1.13

require (
	github.com/dghubble/gologin/v2 v2.2.0
	github.com/google/go-github/v29 v29.0.2
	github.com/micro/go-micro/v2 v2.0.1-0.20200210153841-8ea84ac3ebca
	github.com/micro/micro/v2 v2.0.1-0.20200210165809-607cbba046af
	github.com/micro/platform/service v0.0.0-20200211155913-4ecb922768a1
	golang.org/x/oauth2 v0.0.0-20200107190931-bf48bf16ab8d
)

replace github.com/micro/platform/service => ../service
