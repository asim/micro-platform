package handler

import (
	"context"
	"fmt"

	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/runtime"
	"github.com/micro/go-micro/v2/server"
	"github.com/micro/go-micro/v2/store"
	"github.com/micro/go-micro/v2/util/log"

	pb "github.com/micro/platform/service/proto"
)

// Topic aysnc messages are published to
var Topic = "go.micro.platform.events"

// Handler implements the platform service interface
type Handler struct {
	Store   store.Store
	Event   micro.Event
	Runtime runtime.Runtime
}

// NewHandler returns an initialized Handler
func NewHandler(srv micro.Service) *Handler {
	h := &Handler{
		Store:   store.DefaultStore,
		Runtime: runtime.DefaultRuntime,
		Event:   micro.NewEvent(Topic, srv.Client()),
	}

	err := micro.RegisterSubscriber(
		Topic,
		srv.Server(),
		h.HandleEvent,
		server.SubscriberQueue("queue.platform"),
	)
	if err != nil {
		log.Errorf("Error subscribing to registry: %v", err)
	}

	return h
}

// HandleEvent such as service created, updated or deleted. It reformats
// the request to match the proto and then passes it off to the handler to process
// as it would any other request, ensuring there is no duplicate logic.
func (h *Handler) HandleEvent(ctx context.Context, event *pb.Event) error {
	fmt.Println("MESSAGE RECIEVED")
	req := &pb.CreateEventRequest{Event: event}
	return h.CreateEvent(ctx, req, &pb.CreateEventResponse{})
}
