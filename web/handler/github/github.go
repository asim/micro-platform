package github

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"time"

	"github.com/micro/go-micro/v2/web"
	platform "github.com/micro/platform/service/proto"
	utils "github.com/micro/platform/web/util"
)

// Handler encapsulates the events handlers
type Handler struct {
	platform platform.PlatformService
}

// RegisterHandlers adds the GitHub webhook handlers to the service
func RegisterHandlers(srv web.Service) error {
	h := Handler{
		platform: platform.NewPlatformService("go.micro.platform", srv.Options().Service.Client()),
	}

	srv.HandleFunc("/v1/github/events", h.eventsHandler)
	return nil
}

// processBuildEvent processes build events fired through github actions
func (h *Handler) processBuildEvent(w http.ResponseWriter, req *http.Request) {
	// Extract the request body containing the webhook data
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		utils.Write500(w, err)
		return
	}

	// Unmarshal the bytes into a struct
	var data []string
	if err := json.Unmarshal(body, &data); err != nil {
		utils.Write500(w, err)
		return
	}

	var evType platform.EventType

	// default event type
	switch ev := req.Header.Get("Micro-Event"); ev {
	case "build.started":
		evType = platform.EventType_BuildStarted
	case "build.finished":
		evType = platform.EventType_BuildFinished
	case "build.failed":
		evType = platform.EventType_BuildFailed
	default:
		// unknown event
		return
	}

	// generate a pseudo event
	event := &event{
		// The source repo
		Url: "https://github.com/" + req.Header.Get("X-Github-Repo"),
		// Single commit reference
		Commits: []commit{
			{
				// git commit
				Id: req.Header.Get("X-Github-Sha"),
				// Timestamp
				Timestamp: time.Now().Format(time.RFC3339),
				// Files changed
				Modified: data,
			},
		},
	}

	// Create the events
	err = h.createEvents(req.Context(), evType, event)
	if err != nil {
		utils.Write500(w, err)
	}
}

// eventsHandler processes GitHub events
func (h *Handler) eventsHandler(w http.ResponseWriter, req *http.Request) {
	// process build event
	if strings.HasPrefix(req.Header.Get("Micro-Event"), "build") {
		h.processBuildEvent(w, req)
		return
	}

	// Extract the request body containing the webhook data
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		utils.Write500(w, err)
		return
	}

	var event *event

	if err := json.Unmarshal(body, &event); err != nil {
		utils.Write500(w, err)
		return
	}

	// create the events
	err = h.createEvents(req.Context(), platform.EventType_SourceUpdated, event)
	if err != nil {
		utils.Write500(w, err)
	}
}

// createEvents creates an event per file by extrapolating to a service
func (h *Handler) createEvents(ctx context.Context, event platform.EventType, ev *event) error {
	// the commit affecting all the services
	commit := ev.Commit()
	// version being defaulted to latest
	// TODO: make version and namespace configurable
	version := "latest"
	// default namespace
	namespace := "go.micro"

	// Get the directories (services) which have been impacted
	// TODO: determine if we want to present repo changes
	// versus creating service names here

	// service name to directory
	services := make(map[string]string)

	for _, f := range ev.Files() {
		if c := strings.Split(f, "/"); len(c) > 1 {
			// TODO: decide what to do if non service type files change
			// service alias
			alias := c[0]
			// base directory
			dir := c[0]
			// service type
			srvType := "srv"

			// skip any dir starting with dot
			if strings.HasPrefix(dir, ".") {
				continue
			}

			// if its the api dir or web dir set type
			switch c[1] {
			case "api", "web":
				// service type
				srvType = c[1]
				// service directory
				dir = c[0] + "/" + c[1]
			}

			// fully qualified name
			fqdn := fmt.Sprintf("%s.%s.%s", namespace, srvType, alias)
			// append to list of services
			services[fqdn] = dir
		}
	}

	// generate an event per service which changed
	for service, dir := range services {
		// github.com/micro/services/helloworld
		source := strings.TrimPrefix(ev.Url, "https://") + "/" + dir

		if _, err := h.platform.CreateEvent(ctx, &platform.CreateEventRequest{
			Event: &platform.Event{
				Type: event,
				Service: &platform.Service{
					Name:    service,
					Version: version,
					// TODO: should we set this?
					Source: source,
				},
				Metadata: map[string]string{
					"commit": commit,
				},
			},
		}); err != nil {
			fmt.Println(service, event, err)
			return err
		}
	}

	return nil
}

type event struct {
	// The git url of the repo
	Url string
	// The commits which occurred
	Commits []commit
}

// list of changes files
func (e *event) Files() []string {
	var files []string
	for _, c := range e.Commits {
		files = append(files, c.Files()...)
	}
	return files
}

// Latest returns the latest commit
func (e *event) Commit() string {
	var latest string
	var timestamp int64

	for _, c := range e.Commits {
		t, err := time.Parse(time.RFC3339, c.Timestamp)
		if err != nil {
			continue
		}

		if t.Unix() > timestamp {
			latest = c.Id
			timestamp = t.Unix()
		}
	}

	return latest
}

type commit struct {
	// Commit hash
	Id string
	// Time of commit
	Timestamp string
	// File changes
	Added    []string
	Removed  []string
	Modified []string
}

func (c *commit) Files() []string {
	files := append(c.Added, c.Removed...)
	return append(files, c.Modified...)
}
