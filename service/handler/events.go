package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"
	"time"

	"github.com/micro/go-micro/v2/errors"
	"github.com/micro/go-micro/v2/store"
	pb "github.com/micro/platform/service/proto"
)

// ListEvents returns recent events, if a resource is provided then this is scoped to their events
func (h *Handler) ListEvents(ctx context.Context, req *pb.ListEventsRequest, rsp *pb.ListEventsResponse) error {
	records, err := h.Store.List()
	if err != nil {
		return errors.InternalServerError("go.micro.platform", "unable to read from store: %v", err)
	}

	// Use a prefix to scope to the resource (if one was provided)
	var prefix string
	if req.Service != nil && len(req.Service.Name) > 0 {
		comps := strings.Split(req.Service.Name, ".")
		prefix = fmt.Sprintf("%v.", comps[len(comps)-1])
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
			Service: &pb.Service{
				Name: e.ServiceName,
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
	if req.Event.Type == pb.EventType_Unknown {
		return errors.BadRequest("go.micro.platform", "invalid event type")
	}
	if req.Event.Service == nil || req.Event.Service.Name == "" {
		return errors.BadRequest("go.micro.platform", "invalid event service")
	}

	// Construct the event
	event := Event{
		Type:        req.Event.Type,
		Timestamp:   time.Now(),
		Metadata:    req.Event.Metadata,
		ServiceName: req.Event.Service.Name,
	}

	// Write to the store
	err := h.Store.Write(&store.Record{
		Key:   event.Key(),
		Value: event.Bytes(),
	})
	if err != nil {
		return errors.InternalServerError("go.micro.platform", "unable to write to store")
	}

	return nil
}

// Event is the store representation of an event
type Event struct {
	Type        pb.EventType
	Timestamp   time.Time
	Metadata    map[string]string
	ServiceName string
}

// Key to be used in the store
func (e *Event) Key() string {
	return fmt.Sprintf("%v.%v", e.ServiceName, e.Timestamp.Unix())
}

// Bytes is the JSON encoded event
func (e *Event) Bytes() []byte {
	bytes, _ := json.Marshal(e)
	return bytes
}
