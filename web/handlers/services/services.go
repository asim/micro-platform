package services

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/registry"
	"github.com/micro/go-micro/v2/web"
	logproto "github.com/micro/micro/v2/debug/log/proto"
	statsproto "github.com/micro/micro/v2/debug/stats/proto"
	traceproto "github.com/micro/micro/v2/debug/trace/proto"
	"github.com/micro/platform/web/utils"
)

// RegisterHandlers adds the service handlers to the service
func RegisterHandlers(srv web.Service) error {
	srv.HandleFunc("/v1/services", servicesHandler(srv))
	srv.HandleFunc("/v1/service/logs", logsHandler(srv))
	srv.HandleFunc("/v1/service/stats", statsHandler(srv))
	srv.HandleFunc("/v1/service/trace", tracesHandler(srv))
	return nil
}

func servicesHandler(service web.Service) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		utils.SetupResponse(&w, req)
		if (*req).Method == "OPTIONS" {
			return
		}
		if err := utils.IsLoggedIn(service, req.URL.Query().Get("token")); err != nil {
			utils.Write400(w, err)
			return
		}
		reg := service.Options().Service.Options().Registry
		services, err := reg.ListServices()
		if err != nil {
			utils.Write500(w, err)
			return
		}
		ret := []*registry.Service{}
		for _, v := range services {
			service, err := reg.GetService(v.Name)
			if err != nil {
				utils.Write500(w, err)
				return
			}
			ret = append(ret, service...)
		}
		utils.WriteJSON(w, ret)
	}
}

func logsHandler(service web.Service) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		utils.SetupResponse(&w, req)
		if (*req).Method == "OPTIONS" {
			return
		}
		if err := utils.IsLoggedIn(service, req.URL.Query().Get("token")); err != nil {
			utils.Write400(w, err)
			return
		}
		serviceName := req.URL.Query().Get("service")
		if len(serviceName) == 0 {
			utils.Write400(w, errors.New("Service missing"))
			return
		}
		request := client.NewRequest("go.micro.debug", "Log.Read", &logproto.ReadRequest{
			Service: serviceName,
		})
		rsp := &logproto.ReadResponse{}
		if err := service.Options().Service.Client().Call(req.Context(), request, rsp); err != nil {
			utils.Write500(w, err)
			return
		}
		utils.WriteJSON(w, rsp.GetRecords())
	}
}

func statsHandler(service web.Service) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		utils.SetupResponse(&w, req)
		if (*req).Method == "OPTIONS" {
			return
		}
		if err := utils.IsLoggedIn(service, req.URL.Query().Get("token")); err != nil {
			utils.Write400(w, err)
			return
		}
		serviceName := req.URL.Query().Get("service")
		if len(serviceName) == 0 {
			utils.Write400(w, errors.New("Service missing"))
			return
		}
		request := client.NewRequest("go.micro.debug", "Stats.Read", &statsproto.ReadRequest{
			Service: &statsproto.Service{
				Name: serviceName,
			},
			Past: true,
		})
		rsp := &statsproto.ReadResponse{}
		if err := service.Options().Service.Client().Call(req.Context(), request, rsp); err != nil {
			utils.Write500(w, err)
			return
		}
		utils.WriteJSON(w, rsp.GetStats())
	}
}

func tracesHandler(service web.Service) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, req *http.Request) {
		utils.SetupResponse(&w, req)
		if (*req).Method == "OPTIONS" {
			return
		}
		if err := utils.IsLoggedIn(service, req.URL.Query().Get("token")); err != nil {
			utils.Write400(w, err)
			return
		}
		serviceName := req.URL.Query().Get("service")
		reqProto := &traceproto.ReadRequest{
			Past: true,
		}
		var limit int64 = 1000
		if len(req.URL.Query().Get("limit")) > 0 {
			var err error
			limit, err = strconv.ParseInt(req.URL.Query().Get("limit"), 10, 64)
			if err != nil {
				utils.Write400(w, err)
			}
		}
		if len(serviceName) > 0 {
			reqProto.Service = &traceproto.Service{
				Name: serviceName,
			}
			reqProto.Limit = limit
		}
		request := client.NewRequest("go.micro.debug", "Trace.Read", reqProto)
		rsp := &traceproto.ReadResponse{}
		if err := service.Options().Service.Client().Call(req.Context(), request, rsp); err != nil {
			utils.Write500(w, err)
			return
		}
		utils.WriteJSON(w, rsp.GetSpans())
	}
}
