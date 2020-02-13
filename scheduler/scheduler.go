// Package scheduler provides updates for when the platform has changed
package scheduler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"
)

var (
	// The image we're keeping track of
	Image = "micro/platform"
	// The docker url to poll for updates
	Url = "https://hub.docker.com/v2/repositories"
	// The version to look for
	Version = "latest"
)

type scheduler struct {
	updateChan chan bool
	updateURL  string
	lastUpdate time.Time
}

func getLatest(url string) (time.Time, error) {
	rsp, err := http.Get(url)
	if err != nil {
		return time.Time{}, err
	}
	defer rsp.Body.Close()
	b, err := ioutil.ReadAll(rsp.Body)
	if err != nil {
		return time.Time{}, err
	}
	// unmarshal commits
	var images map[string]interface{}
	err = json.Unmarshal(b, &images)
	if err != nil {
		return time.Time{}, err
	}
	// get the commits
	updated := images["last_updated"].(string)
	// parse returned response to timestamp
	buildTime, err := time.Parse(time.RFC3339, updated)
	if err != nil {
		return time.Time{}, err
	}

	return buildTime, nil
}

// Update is an update notifying channel that tells us if any changes are available
func (s *scheduler) Update() <-chan bool {
	return s.updateChan
}

func (s *scheduler) update() {
	buildTime, err := getLatest(s.updateURL)
	if err != nil {
		return
	}

	// compare build times
	if buildTime.Sub(s.lastUpdate) <= time.Duration(0) {
		return
	}

	// update build time
	s.lastUpdate = buildTime

	// notify of update
	select {
	case s.updateChan <- true:
	case <-time.After(time.Minute):
	}
}

func (s *scheduler) run() {
	t := time.NewTicker(time.Minute)
	defer t.Stop()

	for {
		select {
		case <-t.C:
			s.update()
		}
	}
}

func New() *scheduler {
	url := fmt.Sprintf("%s/%s/tags/%s", Url, Image, Version)
	now, _ := getLatest(url)

	s := &scheduler{
		updateChan: make(chan bool),
		updateURL:  url,
		lastUpdate: now,
	}

	go s.run()

	return s
}
