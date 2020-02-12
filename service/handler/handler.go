package handler

import (
	"context"

	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/broker"
	"github.com/micro/go-micro/v2/server"
	"github.com/micro/go-micro/v2/store"
	"github.com/micro/go-micro/v2/util/log"

	registry "github.com/micro/go-micro/v2/registry/service/proto"
	pb "github.com/micro/platform/service/proto"
)

// Handler implements the platform service interface
type Handler struct {
	store  store.Store
	broker broker.Broker
}

// NewHandler returns an initialized Handler
func NewHandler(srv micro.Service) *Handler {
	h := &Handler{
		store:  store.DefaultStore,
		broker: srv.Server().Options().Broker,
	}

	err := micro.RegisterSubscriber(
		"go.micro.registry.events",
		srv.Server(),
		h.HandleRegistryEvent,
		server.SubscriberQueue("queue.events"),
	)
	if err != nil {
		log.Errorf("Error subscribing to registry: %v", err)
	}

	return h
}

var eventTypeMap = map[registry.EventType]string{
	registry.EventType_Create: "deployment.created",
	registry.EventType_Update: "deployment.updated",
	registry.EventType_Delete: "deployment.deleted",
}

// HandleRegistryEvent such as service created, updated or deleted. It reformats
// the request to match the proto and then passes it off to the handler to process
// as it would any other request, ensuring there is no duplicate logic.
func (h *Handler) HandleRegistryEvent(ctx context.Context, event *registry.Event) error {
	req := &pb.CreateEventRequest{
		Event: &pb.Event{
			Type: eventTypeMap[event.Type],
			Resource: &pb.Resource{
				Type: "service",
				Name: event.Service.Name,
			},
		},
	}

	return h.CreateEvent(ctx, req, &pb.CreateEventResponse{})
}
