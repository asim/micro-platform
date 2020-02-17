// Package infrastructure provides functions for orchestrating a Micro platform
package infrastructure

import (
	"github.com/pkg/errors"
)

// Task describes an individual task
type Task interface {
	Validate() error
	Plan() error
	Apply() error
	Finalise() error
}

// Step is a list of parallisable tasks
type Step []Task

// Platform defines a complete platform
type Platform struct {
	Name    string
	Domain  string
	Gslb    string
	Kv      string
	Regions []struct {
		Provider string
		Region   string
		Control  []string
		Resource []string
		Network  []string
	}
}

// Steps generates an action plan from a Platform description
func Steps(p *Platform) ([]Step, error) {

	return nil, errors.New("Steps is not Implemented")
}
