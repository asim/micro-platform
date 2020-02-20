package cmd

import (
	"fmt"
	"os"

	"github.com/micro/platform/infrastructure"
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

// planCmd represents the plan command
var planCmd = &cobra.Command{
	Use:   "plan",
	Short: "Validate the configuration",
	Long: `Show what actions will be carried out to the platform

Instantiates various terraform modules, then runs terraform init, terraform validate`,
	Run: func(cmd *cobra.Command, args []string) {
		for _, p := range validate() {
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

// applyCmd represents the apply command
var applyCmd = &cobra.Command{
	Use:   "apply",
	Short: "Apply the configuration",
	Long: `Applies the configuration - this creates or modifies cloud resources

If you cancel this command, data loss may occur`,
	Run: func(cmd *cobra.Command, args []string) {
		for _, p := range validate() {
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

// destroyCmd represents the destroy command
var destroyCmd = &cobra.Command{
	Use:   "destroy",
	Short: "Destroy the configuration",
	Long: `Destroys the configuration - this destroys or modifies cloud resources

If you cancel this command, data loss may occur`,
	Run: func(cmd *cobra.Command, args []string) {
		for _, p := range validate() {
			s, err := p.Steps()
			if err != nil {
				fmt.Fprintf(os.Stderr, "%s\n", err.Error())
				os.Exit(1)
			}
			if err := infrastructure.ExecuteDestroy(s); err != nil {
				fmt.Fprintf(os.Stderr, "%s\n", err.Error())
				os.Exit(1)
			}
		}
		fmt.Printf("Destroy Succeeded\n")
	},
}

func validate() []infrastructure.Platform {
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
	return platforms
}

func init() {
	infraCmd.AddCommand(planCmd)
	infraCmd.AddCommand(applyCmd)
	infraCmd.AddCommand(destroyCmd)
}
