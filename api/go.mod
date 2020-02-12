module github.com/micro/platform/api

go 1.13

require (
	github.com/go-delve/delve v1.4.0 // indirect
	github.com/golang/protobuf v1.3.3
	github.com/micro/go-micro/v2 v2.0.1-0.20200211112222-4a0318348137
	github.com/micro/platform/service v0.0.0-20200212114434-2748659fe83e
)

replace github.com/micro/platform/service => ../service
