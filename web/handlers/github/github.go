package github

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/micro/go-micro/v2/web"
	platform "github.com/micro/platform/service/proto"
	"github.com/micro/platform/web/utils"
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
	return nil
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
	srvs := []string{}
	for _, c := range data.Commits {
		srvs = append(srvs, c.ServicesImpacted()...)
	}
	srvs = uniqueStrings(srvs)

	// Create push events for the servies
	for _, srv := range srvs {
		_, err := h.platform.CreateEvent(req.Context(), &platform.CreateEventRequest{
			Event: &platform.Event{
				Type: "source.updated",
				Resource: &platform.Resource{
					Type: "service",
					Name: srv,
				},
			},
		})

		if err != nil {
			utils.Write500(w, err)
		}
	}
}

type commit struct {
	Added    []string
	Removed  []string
	Modified []string
}

func (c *commit) ServicesImpacted() []string {
	allFiles := []string{}
	allFiles = append(c.Added, c.Removed...)
	allFiles = append(allFiles, c.Modified...)

	dirs := []string{}
	for _, f := range allFiles {
		if c := strings.Split(f, "/"); len(c) > 1 {
			dirs = append(dirs, c[0])
		}
	}

	return uniqueStrings(dirs)
}

func uniqueStrings(input []string) []string {
	u := make([]string, 0, len(input))
	m := make(map[string]bool)

	for _, val := range input {
		if _, ok := m[val]; !ok {
			m[val] = true
			u = append(u, val)
		}
	}

	return u
}
