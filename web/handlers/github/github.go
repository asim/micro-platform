package github

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/micro/go-micro/v2/web"
	"github.com/micro/platform/web/utils"
)

// RegisterHandlers adds the GitHub webhook handlers to the service
func RegisterHandlers(srv web.Service) error {
	srv.HandleFunc("/v1/github/webhook", webhookHandler)
	return nil
}

func webhookHandler(w http.ResponseWriter, req *http.Request) {
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		utils.Write500(w, err)
		return
	}

	fmt.Println(string(body))
}
