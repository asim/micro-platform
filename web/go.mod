module github.com/micro/platform/web

go 1.13

require (
	github.com/dghubble/gologin/v2 v2.2.0
	github.com/google/uuid v1.1.1
	github.com/gorilla/securecookie v1.1.1 // indirect
	github.com/micro/go-micro v1.18.1-0.20200126191206-1108cc5e91fd
	github.com/micro/micro v1.18.1-0.20200123150258-806d0dbc6970
	golang.org/x/oauth2 v0.0.0-20191202225959-858c2ad4c8b6
)

replace github.com/micro/micro => github.com/micro/micro v1.18.1-0.20200123150258-806d0dbc6970
