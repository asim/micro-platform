package main

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/util/log"

	"github.com/micro/platform/service/handler"
	pb "github.com/micro/platform/service/proto"
)

func main() {
	service := micro.NewService(
		micro.Name("go.micro.platform"),
	)

	service.Init()

	pb.RegisterPlatformHandler(service.Server(), new(handler.Platform))

	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
