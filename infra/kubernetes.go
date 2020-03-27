package infra

import (
	"fmt"

	"github.com/spf13/viper"
)

// Kubernetes represents a Kube Cluster
type Kubernetes struct {
	Name     string
	Region   string
	Provider string
}

// Steps generates steps that provision a Kubernetes cluster
func (k *Kubernetes) Steps(runID int32) ([]Step, error) {
	var s []Step
	k8sName := k.internalName("k8s")
	configName := k.internalName("kubeconfig")
	vars := make(map[string]string)
	vars["kubernetes"] = k.Provider
	vars["args"] = fmt.Sprintf(`["%s","%s"]`, k8sName, viper.GetString("aws-region"))
	s = append(s,
		// Provision the cluster
		Step{
			&TerraformModule{
				ID:     k8sName,
				Name:   k8sName,
				Source: "./infra/kubernetes/" + k.Provider,
				Path:   fmt.Sprintf("/tmp/%s-%d", k8sName, runID),
			},
		},
		// Grab the Kubernetes Config
		Step{
			&TerraformModule{
				ID:        configName,
				Name:      configName,
				Source:    "./infra/kubernetes/kubeconfig",
				Path:      fmt.Sprintf("/tmp/%s-%d", configName, runID),
				Variables: vars,
			},
		},
	)
	return s, nil
}

func (k *Kubernetes) internalName(module string) string {
	return fmt.Sprintf("%s-%s-%s-%s", k.Name, k.Region, k.Provider, module)
}
