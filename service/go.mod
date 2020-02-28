module github.com/micro/platform/service

go 1.13

require (
	github.com/golang/protobuf v1.3.3
	github.com/google/uuid v1.1.1
	github.com/kr/pretty v0.2.0 // indirect
	github.com/micro/go-micro/v2 v2.1.3-0.20200227161105-e21ed3a183ea
	golang.org/x/sys v0.0.0-20200124204421-9fbb57f87de9 // indirect
	gopkg.in/check.v1 v1.0.0-20190902080502-41f04d3bba15 // indirect
	gopkg.in/yaml.v2 v2.2.8 // indirect
)

replace github.com/micro/platform/api => ../api
