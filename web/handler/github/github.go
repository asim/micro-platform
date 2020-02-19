package github

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

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

	srv.HandleFunc("/v1/github/webhook", h.WebhookHandler)
	srv.HandleFunc("/v1/github/build-started", h.BuildStartedHandler)
	srv.HandleFunc("/v1/github/build-finished", h.BuildFinishedHandler)
	return nil
}

// BuildStartedHandler process the github webhook for a docker build starting
func (h *Handler) BuildStartedHandler(w http.ResponseWriter, req *http.Request) {
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

	// Create the events
	err = h.createEventsForFiles(req.Context(), platform.EventType_BuildStarted, data)
	if err != nil {
		utils.Write500(w, err)
	}
}

// BuildFinishedHandler process the github webhook for a docker build starting
func (h *Handler) BuildFinishedHandler(w http.ResponseWriter, req *http.Request) {
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

	// Create the events
	err = h.createEventsForFiles(req.Context(), platform.EventType_BuildFinished, data)
	if err != nil {
		utils.Write500(w, err)
	}
}

// WebhookHandler processes the GitHub push webhooks
func (h *Handler) WebhookHandler(w http.ResponseWriter, req *http.Request) {
	// Extract the request body containing the webhook data
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		utils.Write500(w, err)
		return
	}

	// Unmarshal the bytes into a struct
	var data struct {
		Commits []commit
	}
	if err := json.Unmarshal(body, &data); err != nil {
		utils.Write500(w, err)
		return
	}

	// Get the directories (services) which have been impacted
	files := []string{}
	for _, c := range data.Commits {
		files = append(files, c.Files()...)
	}

	// create the events
	err = h.createEventsForFiles(req.Context(), platform.EventType_SourceUpdated, files)
	if err != nil {
		utils.Write500(w, err)
	}
}

func (h *Handler) createEventsForFiles(ctx context.Context, event platform.EventType, files []string) error {
	srvs := []string{}
	for _, f := range files {
		if c := strings.Split(f, "/"); len(c) > 1 {
			srvs = append(srvs, c[0])
		}
	}

	for _, srv := range uniqueStrings(srvs) {
		_, err := h.platform.CreateEvent(ctx, &platform.CreateEventRequest{
			Event: &platform.Event{
				Type: event,
				Service: &platform.Service{
					Name: srv,
				},
			},
		})

		if err != nil {
			fmt.Println(srv, event)
			return err
		}
	}

	return nil
}

type commit struct {
	Added    []string
	Removed  []string
	Modified []string
}

func (c *commit) Files() []string {
	files := append(c.Added, c.Removed...)
	return append(files, c.Modified...)
}

func uniqueStrings(input []string) []string {
	u := make([]string, 0, len(input))
	m := make(map[string]bool)

	for _, val := range input {
		// skip anything starting with dot
		if strings.HasPrefix(val, ".") {
			continue
		}
		if _, ok := m[val]; !ok {
			m[val] = true
			u = append(u, val)
		}
	}

	return u
}
