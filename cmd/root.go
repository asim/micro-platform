package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var cfgFile string

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "platform",
	Short: "The Micro platform binary",
	Long: `The Micro platform binary.

All features of the micro platform can be started with this command.`,
}

// Execute is the root entrypoint
func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
