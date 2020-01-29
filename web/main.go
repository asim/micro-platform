package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/dghubble/gologin/v2"
	"github.com/dghubble/gologin/v2/github"
	"github.com/google/uuid"
	"github.com/micro/go-micro/client"
	"github.com/micro/go-micro/registry"
	"github.com/micro/go-micro/store"
	memstore "github.com/micro/go-micro/store/memory"
	"github.com/micro/go-micro/web"
	logproto "github.com/micro/micro/debug/log/proto"

	//statproto "github.com/micro/micro/debug/stats/proto"
	"golang.org/x/oauth2"
	githubOAuth2 "golang.org/x/oauth2/github"
)

var userStore = memstore.NewStore(store.Namespace("users"))

type User struct {
	//Email string
	Name string `json:"name"`
}

// issueSession issues a cookie session after successful Github login
func issueSession() http.Handler {
	fn := func(w http.ResponseWriter, req *http.Request) {
		ctx := req.Context()
		githubUser, err := github.UserFromContext(ctx)
		if err != nil {
			write500(w, err)
			return
		}
		user := User{
			//Email: *githubUser.Email,
			Name: *githubUser.Name,
		}
		userJSON, err := json.Marshal(user)
		if err != nil {
			write500(w, err)
			return
		}
		token := uuid.New().String()
		userRecord := &store.Record{
			// Would be nice to manually invalidate a token once a new one is issued
			// but that would need some querying capability the store does not have.
			Key:    token,
			Value:  userJSON,
			Expiry: 30 * 24 * time.Hour,
		}
		err = userStore.Write(userRecord)
		if err != nil {
			write500(w, err)
			return
		}
		// Include the minted session in a query parameter so the frontend can save it.
		// Although with https query paramteres are encrypted, this is still not the most ideal
		// way to do it. Will suffice for now.
		http.Redirect(w, req, os.Getenv("FRONTEND_ADDRESS")+"/services?token="+token, http.StatusFound)
	}
	return http.HandlerFunc(fn)
}

func servicesHandler(service web.Service) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		setupResponse(&w, req)
		if (*req).Method == "OPTIONS" {
			return
		}
		reg := service.Options().Service.Options().Registry
		services, err := registry.ListServices()
		if err != nil {
			write500(w, err)
			return
		}
		ret := []*registry.Service{}
		for _, v := range services {
			service, err := reg.GetService(v.Name)
			if err != nil {
				write500(w, err)
				return
			}
			ret = append(ret, service...)
		}
		write(w, ret)
	}
}

func logsHandler(service web.Service) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		setupResponse(&w, req)
		if (*req).Method == "OPTIONS" {
			return
		}
		service := req.URL.Query().Get("service")
		if len(service) == 0 {
			write400(w, errors.New("Token missing"))
			return
		}
		request := client.NewRequest("go.micro.debug", "Log.Read", &logproto.ReadRequest{
			Service: service,
		})
		rsp := &logproto.ReadResponse{}
		if err := client.Call(context.TODO(), request, rsp); err != nil {
			write500(w, err)
			return
		}
		write(w, rsp.GetRecords())
	}
}

func statsHandler(service web.Service) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		setupResponse(&w, req)
		if (*req).Method == "OPTIONS" {
			return
		}
		service := req.URL.Query().Get("service")
		if len(service) == 0 {
			write400(w, errors.New("Token missing"))
			return
		}
		request := client.NewRequest("go.micro.debug", "Log.Read", &logproto.ReadRequest{
			Service: service,
		})
		rsp := &logproto.ReadResponse{}
		if err := client.Call(context.TODO(), request, rsp); err != nil {
			write500(w, err)
			return
		}
		write(w, rsp.GetRecords())
	}
}

func userHandler(w http.ResponseWriter, req *http.Request) {
	setupResponse(&w, req)
	if (*req).Method == "OPTIONS" {
		return
	}
	token := req.URL.Query().Get("token")
	if len(token) == 0 {
		write400(w, errors.New("Token missing"))
		return
	}
	userRecord, err := userStore.Read(token)
	if err != nil {
		write500(w, err)
		return
	}
	if len(userRecord) == 0 {
		write400(w, errors.New("Not found"))
		return
	}
	user := &User{}
	err = json.Unmarshal(userRecord[0].Value, user)
	if err != nil {
		write500(w, err)
		return
	}
	write(w, user)
}

func main() {
	service := web.NewService(
		web.Name("go.micro.web.platform"),
	)
	fmt.Println(os.Getenv("GITHUB_OAUTH_CLIENT_SECRET"))
	oauth2Config := &oauth2.Config{
		ClientID:     os.Getenv("GITHUB_OAUTH_CLIENT_ID"),
		ClientSecret: os.Getenv("GITHUB_OAUTH_CLIENT_SECRET"),
		RedirectURL:  os.Getenv("GITHUB_OAUTH_REDIRECT_URL"),
		Endpoint:     githubOAuth2.Endpoint,
	}
	// state param cookies require HTTPS by default; disable for localhost development
	stateConfig := gologin.DebugOnlyCookieConfig
	service.Handle("/v1/github/login", github.StateHandler(stateConfig, github.LoginHandler(oauth2Config, nil)))
	service.Handle("/v1/auth/verify", github.StateHandler(stateConfig, github.CallbackHandler(oauth2Config, issueSession(), nil)))
	service.HandleFunc("/v1/user", userHandler)
	service.HandleFunc("/v1/services", servicesHandler(service))
	service.HandleFunc("/v1/service/logs", logsHandler(service))
	service.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		// Count is an ugly fix to serve urls containing micro service names ie. "go.micro.something"
		if strings.Contains(req.URL.Path, ".") && strings.Count(req.URL.Path, ".") == 1 {
			http.ServeFile(w, req, "./app/dist/micro/"+req.URL.Path[1:])
			return
		}
		http.ServeFile(w, req, "./app/dist/micro/index.html")
	})

	if err := service.Init(); err != nil {
		log.Fatal(err)
	}

	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}

// Utils below.
// These functions serve no other purpose than to help
// with unmarshaling/marshaling JSON inputs and outputs for handlers.

// this should really be a middleware later
func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func write(w http.ResponseWriter, body interface{}) {
	rawBody, err := json.Marshal(body)
	if err != nil {
		write500(w, err)
		return
	}
	writeString(w, 200, string(rawBody))
}

func writeString(w http.ResponseWriter, status int, body string) {
	w.Header().Set("Content-Length", fmt.Sprintf("%v", len(body)))
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	fmt.Fprintf(w, `%v`, body)
}

func readJsonBody(r *http.Request, expectedBody interface{}) error {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return errors.New("unable to read body")
	}
	if err := json.Unmarshal(body, expectedBody); err != nil {
		return errors.New("invalid json body format: " + err.Error())
	}
	return nil
}

func write400(w http.ResponseWriter, err error) {
	rawBody, err := json.Marshal(map[string]string{
		"error": err.Error(),
	})
	if err != nil {
		write500(w, err)
		return
	}
	writeString(w, 400, string(rawBody))
}

func write500(w http.ResponseWriter, err error) {
	rawBody, err := json.Marshal(map[string]string{
		"error": err.Error(),
	})
	if err != nil {
		write500(w, err)
		return
	}
	writeString(w, 500, string(rawBody))
}
