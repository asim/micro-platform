package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"sort"
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

	var prefix string

	// Use a prefix to scope to the resource (if one was provided)
	if req.Service != nil && len(req.Service.Name) > 0 {
		prefix = req.Service.Name + ":"
	}

	// Filter and decode the records
	for _, r := range records {
		if !strings.HasPrefix(r.Key, prefix) {
			continue
		}

		var e *pb.Event
		if err := json.Unmarshal(r.Value, &e); err != nil {
			return errors.InternalServerError("go.micro.platform", "unable to decode records")
		}
		rsp.Events = append(rsp.Events, e)
	}

	// sort the events
	sort.Slice(rsp.Events, func(i, j int) bool { return rsp.Events[i].Timestamp > rsp.Events[j].Timestamp })

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

	if req.Event.Timestamp == 0 {
		req.Event.Timestamp = time.Now().Unix()
	}
	// Construct the event
	event := &Event{req.Event}

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
	*pb.Event
}

// Key to be used in the store
func (e *Event) Key() string {
	return fmt.Sprintf("%v:%v:%v", e.Service.Name, e.Event.Type.String(), e.Timestamp)
}

// Bytes is the JSON encoded event
func (e *Event) Bytes() []byte {
	b, _ := json.Marshal(e)
	return b
}
