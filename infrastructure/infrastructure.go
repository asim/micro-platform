// Package infrastructure provides functions for orchestrating a Micro platform
package infrastructure

import (
	"fmt"
	"math/rand"
	"time"
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
func (p *Platform) Steps() ([]Step, error) {
	// Not secure random, it doesn't matter as it's only to generate non colliding directory names
	rand.Seed(time.Now().UnixNano())
	dirSuffix := rand.Int31()
	var steps []Step
	// 1: Ensure Remote state is available
	steps = append(steps, Step{&Noop{ID: p.Name + "-Check-Remote-State", Name: p.Name + "-Check-Remote-State"}})

	// 2: Set up KV namespace
	steps = append(steps, Step{
		&TerraformModule{
			ID:     p.Name + "-kv",
			Name:   p.Name + "-kv",
			Source: "./infrastructure/kv/" + p.Kv,
			Path:   fmt.Sprintf("/tmp/%s-%d", p.Name+"-kv", dirSuffix),
		},
	})

	for _, r := range p.Regions {
		// 2.1 Create Kubernetes cluster
		steps = append(steps, Step{
			&TerraformModule{
				ID:     p.Name + "-" + r.Region + "-" + r.Provider + "-k8s",
				Name:   p.Name + "-" + r.Region + "-" + r.Provider + "-k8s",
				Source: "./infrastructure/kubernetes/" + r.Provider,
				Path:   fmt.Sprintf("/tmp/%s-%s-%s-%d", p.Name, r.Region, r.Provider, dirSuffix),
			},
		})

		// 2.2 Create shared resources
	}

	return steps, nil
}

// ExecutePlan carries out a plan on steps
func ExecutePlan(steps []Step) error {
	for _, step := range steps {
		for _, t := range step {
			defer t.Finalise()
			if err := t.Validate(); err != nil {
				return err
			}
			if err := t.Plan(); err != nil {
				return err
			}
		}
	}
	return nil
}

// ExecuteApply carries out an apply on steps
func ExecuteApply(steps []Step) error {
	for _, step := range steps {
		for _, t := range step {
			defer t.Finalise()
			if err := t.Validate(); err != nil {
				return err
			}
			if err := t.Plan(); err != nil {
				return err
			}
			if err := t.Apply(); err != nil {
				return err
			}
		}
	}
	return nil
}
