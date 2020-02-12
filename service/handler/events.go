package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/micro/go-micro/v2/broker"
	"github.com/micro/go-micro/v2/errors"
	"github.com/micro/go-micro/v2/store"
	"github.com/micro/go-micro/v2/util/log"
	pb "github.com/micro/platform/service/proto"
)

// EventTypes are the valid event types
var EventTypes = []string{
	"source.updated",
	"deployment.created",
	"deployment.updated",
	"deployment.deleted",
}

// ListEvents returns recent events, if a resource is provided then this is scoped to their events
func (h *Handler) ListEvents(ctx context.Context, req *pb.ListEventsRequest, rsp *pb.ListEventsResponse) error {
	records, err := h.store.List()
	if err != nil {
		return errors.InternalServerError("go.micro.platform", "unable to read from store")
	}

	// Use a prefix to scope to the resource (if one was provided)
	var prefix string
	if req.Resource != nil {
		prefix = fmt.Sprintf("%v.%v", req.Resource.Type, req.Resource.Name)
	}

	// Filter and decode the records
	events := []Event{}
	for _, r := range records {
		if !strings.HasPrefix(r.Key, prefix) {
			continue
		}

		var e Event
		if err := json.Unmarshal(r.Value, &e); err != nil {
			return errors.InternalServerError("go.micro.platform", "unable to decode records")
		}

		events = append(events, e)
	}

	// Serialize the response
	rsp.Events = make([]*pb.Event, len(events))
	for i, e := range events {
		rsp.Events[i] = &pb.Event{
			Type:      e.Type,
			Timestamp: e.Timestamp.Unix(),
			Metadata:  e.Metadata,
			Resource: &pb.Resource{
				Type: e.ResourceType,
				Name: e.ResourceName,
			},
		}
	}

	return nil
}

// CreateEvent records a new event for a resource
func (h *Handler) CreateEvent(ctx context.Context, req *pb.CreateEventRequest, rsp *pb.CreateEventResponse) error {
	// Perform the validations
	if req.Event == nil {
		return errors.BadRequest("go.micro.platform", "missing event")
	}
	if req.Event.Resource == nil {
		return errors.BadRequest("go.micro.platform", "missing event resource")
	}
	if req.Event.Resource.Name == "" || req.Event.Resource.Type == "" {
		return errors.BadRequest("go.micro.platform", "invalid event resource")
	}

	var isValidEvent bool
	for _, t := range EventTypes {
		if t == req.Event.Type {
			isValidEvent = true
			break
		}
	}
	if !isValidEvent {
		return errors.BadRequest("go.micro.platform", "invalid event type")
	}

	// Construct the event
	event := Event{
		Type:         req.Event.Type,
		Timestamp:    time.Now(),
		Metadata:     req.Event.Metadata,
		ResourceType: req.Event.Resource.Type,
		ResourceName: req.Event.Resource.Name,
	}

	// Write to the store
	err := h.store.Write(&store.Record{
		Key:   event.Key(),
		Value: event.Bytes(),
	})
	if err != nil {
		return errors.InternalServerError("go.micro.platform", "unable to write to store")
	}

	// Publish on the message broker. This is non-critical so any errors
	// will be logged but not returned to the user as we don't want them to
	// retry the request
	bytes, err := json.Marshal(req.Event)
	if err != nil {
		log.Errorf("Error marshaling JSON: %v", err)
		return nil
	}
	err = h.broker.Publish("go.micro.platform.event.created", &broker.Message{Body: bytes})
	if err != nil {
		log.Errorf("Error publishing to broker: %v", err)
	}

	return nil
}

// Event is the store representation of an event
type Event struct {
	Type      string
	Timestamp time.Time
	Metadata  map[string]string

	ResourceType string
	ResourceName string
}

// Key to be used in the store
func (e *Event) Key() string {
	return fmt.Sprintf("%v.%v.%v", e.ResourceType, e.ResourceName, e.Timestamp.Unix())
}

// Bytes is the JSON encoded event
func (e *Event) Bytes() []byte {
	bytes, _ := json.Marshal(e)
	return bytes
}
