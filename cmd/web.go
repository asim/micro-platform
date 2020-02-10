package cmd

import (
	"os"
	"os/exec"

	"github.com/spf13/cobra"
)

// webCmd represents the web command
var webCmd = &cobra.Command{
	Use:   "web",
	Short: "Start the platform web server",
	Long:  `Start the platform web server.`,
	Run: func(cmd *cobra.Command, args []string) {
		// TODO once a suitable config/flags package happens remove this and just execute the package directly
		web := exec.Command("./web")
		web.Stdout = os.Stdout
		web.Stderr = os.Stderr
		web.Dir = "./web"
		if err := web.Run(); err != nil {
			os.Exit(err.(*exec.ExitError).ExitCode())
		}
	},
}

func init() {
	rootCmd.AddCommand(webCmd)
}
