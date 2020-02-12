package handler

import (
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/broker"
	"github.com/micro/go-micro/v2/store"
)

// Handler implements the platform service interface
type Handler struct {
	store  store.Store
	broker broker.Broker
}

// NewHandler returns an initialized Handler
func NewHandler(srv micro.Service) *Handler {
	return &Handler{
		store:  store.DefaultStore,
		broker: srv.Server().Options().Broker,
	}
}
