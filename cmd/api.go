package cmd

import (
	"os"
	"os/exec"

	"github.com/spf13/cobra"
)

// apiCmd represents the api command
var apiCmd = &cobra.Command{
	Use:   "api",
	Short: "Start the platform API",
	Long:  `Start the platform API.`,
	Run: func(cmd *cobra.Command, args []string) {
		// TODO once a suitable config/flags package happens remove this and just execute the package directly
		api := exec.Command("./api")
		api.Stdout = os.Stdout
		api.Stderr = os.Stderr
		api.Dir = "./api"
		if err := api.Run(); err != nil {
			os.Exit(err.(*exec.ExitError).ExitCode())
		}
	},
}

func init() {
	rootCmd.AddCommand(apiCmd)
}
