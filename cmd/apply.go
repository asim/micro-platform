package cmd

import (
	"fmt"
	"os"

	"github.com/micro/platform/infrastructure"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// applyCmd represents the plan command
var applyCmd = &cobra.Command{
	Use:   "apply",
	Short: "Apply the configuration",
	Long: `Applies the configuration - this creates or modifies cloud resources

If you cancel this command, data loss may occur`,
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
			if err := infrastructure.ExecuteApply(s); err != nil {
				fmt.Fprintf(os.Stderr, "%s\n", err.Error())
				os.Exit(1)
			}
		}
		fmt.Printf("Apply Succeeded\n")
	},
}

func init() {
	infraCmd.AddCommand(applyCmd)
}
