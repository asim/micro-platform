module github.com/micro/platform/api

go 1.13

require (
	github.com/golang/protobuf v1.3.3
	github.com/micro/go-micro/v2 v2.1.3-0.20200227161105-e21ed3a183ea
	github.com/micro/platform/service v0.0.0-20200212114434-2748659fe83e
)

replace github.com/micro/platform/service => ../service
