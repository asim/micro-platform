package cmd

import (
	"fmt"
	"os"

	"github.com/micro/platform/infrastructure"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// planCmd represents the plan command
var planCmd = &cobra.Command{
	Use:   "plan",
	Short: "Validate the configuration",
	Long: `Show what actions will be carried out to the platform

Instantiates various terraform modules, then runs terraform init, terraform validate`,
	Run: func(cmd *cobra.Command, args []string) {
		if viper.Get("platforms") == nil || len(viper.Get("platforms").([]interface{})) == 0 {
			fmt.Fprintf(os.Stderr, "No platforms defined in config file\n")
			os.Exit(1)
		}
		var platforms []infrastructure.Platform
		err := viper.UnmarshalKey("platforms", &platforms)
		if err != nil {
			fmt.Fprintf(os.Stderr, "%s\n", err.Error())
			os.Exit(1)
		}
		for _, p := range platforms {
			s, err := p.Steps()
			if err != nil {
				fmt.Fprintf(os.Stderr, "%s\n", err.Error())
				os.Exit(1)
			}
			if err := infrastructure.ExecutePlan(s); err != nil {
				fmt.Fprintf(os.Stderr, "%s\n", err.Error())
				os.Exit(1)
			}
		}
		fmt.Printf("Plan Succeeded - run infra apply\n")
	},
}

func init() {
	infraCmd.AddCommand(planCmd)
}
