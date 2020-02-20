package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var (
	infraConfigFile string
)

// infraCmd represents the infrastructure command
var infraCmd = &cobra.Command{
	Use:   "infra",
	Short: "Manage the platform's infrastructure'",
	Long: `Manage the platform's infrastructure. Based on a configuration file,
a complete platform can be created across multiple cloud providers`,
}

func init() {
	cobra.OnInitialize(infraConfig)

	rootCmd.AddCommand(infraCmd)

	infraCmd.PersistentFlags().StringVarP(
		&infraConfigFile,
		"config-file",
		"c",
		"",
		"Path to infrastructure definition file",
	)

	infraCmd.MarkPersistentFlagRequired("config-file")
	viper.BindPFlag("config-file", infraCmd.PersistentFlags().Lookup("config-file"))
}

// initConfig reads in config file and ENV variables if set.
func infraConfig() {
	if infraConfigFile != "" {
		// Use config file from the flag.
		viper.SetConfigFile(infraConfigFile)
	}

	viper.AutomaticEnv() // read in environment variables that match

	// If a config file is found, read it in.
	if err := viper.ReadInConfig(); err == nil {
		fmt.Println("Using config file:", viper.ConfigFileUsed())
	}
}
