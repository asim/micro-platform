package cmd

import (
	"fmt"
	"os"

	"github.com/micro/platform/infra"
	"github.com/spf13/cobra"

	"math/rand"
)

var (
	kubeCommand = &cobra.Command{
		Use:   "kubernetes",
		Short: "Provision Kubernetes clusters",
		Long:  `Provision Kubernetes clusters`,
	}

	kubeName     string
	kubeProvider string
	kubeRegion   string

	kubeCreateCommand = &cobra.Command{
		Use:   "create",
		Short: "Create a Kubernetes cluster",
		Long:  "Create a Kubernetes cluster",
		Run: func(cmd *cobra.Command, args []string) {
			k, err := makeKube()
			if err != nil {
				fmt.Fprintf(os.Stderr, "%+v\n", err)
				os.Exit(1)
			}
			err = infra.ExecuteApply(k)
			if err != nil {
				fmt.Fprintf(os.Stderr, "%+v\n", err)
				os.Exit(1)
			}
		},
	}

	kubeDestroyCommand = &cobra.Command{
		Use:   "destroy",
		Short: "Destroy a Kubernetes cluster",
		Long:  "Destroy a Kubernetes cluster",
		Run: func(cmd *cobra.Command, args []string) {
			k, err := makeKube()
			if err != nil {
				fmt.Fprintf(os.Stderr, "%+v\n", err)
				os.Exit(1)
			}
			err = infra.ExecuteDestroy(k)
			if err != nil {
				fmt.Fprintf(os.Stderr, "%+v\n", err)
				os.Exit(1)
			}
		},
	}

	kubeConfigCommand = &cobra.Command{
		Use:   "kubeconfig",
		Short: "Get Kube config for a created cluster",
		Long:  "Get Kube config for a created cluster",
		Run: func(cmd *cobra.Command, args []string) {
			println("fail")
			os.Exit(1)
		},
	}
)

func makeKube() ([]infra.Step, error) {
	k := &infra.Kubernetes{
		Name:     kubeName,
		Provider: kubeProvider,
		Region:   kubeRegion,
	}
	return k.Steps(rand.Int31())
}

func init() {
	rootCmd.AddCommand(kubeCommand)
	kubeCommand.AddCommand(kubeCreateCommand)
	kubeCommand.AddCommand(kubeDestroyCommand)
	kubeCommand.PersistentFlags().StringVarP(&kubeName, "name", "n", "microdev", "Cluster name")
	kubeCommand.PersistentFlags().StringVarP(&kubeRegion, "region", "r", "uksouth", "Cluster Region")
	kubeCommand.PersistentFlags().StringVarP(&kubeProvider, "provider", "p", "azure", "Cluster Region")
}
