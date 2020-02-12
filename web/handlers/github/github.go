package github

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/micro/go-micro/v2/web"
	"github.com/micro/platform/web/utils"
)

// RegisterHandlers adds the GitHub webhook handlers to the service
func RegisterHandlers(srv web.Service) error {
	srv.HandleFunc("/v1/github/webhook", webhookHandler)
	return nil
}

func webhookHandler(w http.ResponseWriter, req *http.Request) {
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
	fmt.Println(srvs)
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
