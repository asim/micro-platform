module github.com/micro/platform/api

go 1.13

require (
	github.com/golang/protobuf v1.3.3
	github.com/micro/go-micro/v2 v2.2.1-0.20200313221509-609f4826b35d
	github.com/micro/platform/service v0.0.0-20200313185528-4a795857eb73
)

replace github.com/micro/platform/service => ../service
