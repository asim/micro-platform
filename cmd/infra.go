package cmd

import (
	"fmt"
	"os"
	"strings"

	"github.com/micro/platform/infrastructure"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// infraCmd represents the infrastructure command
var infraCmd = &cobra.Command{
	Use:   "infra",
	Short: "Manage the platform's infrastructure'",
	Long: `Manage the platform's infrastructure. Based on a configuration file,
a complete platform can be created across multiple cloud providers`,
}

// Flags for the infrastructure command
var (
	infraConfigFile string
)

func init() {
	cobra.OnInitialize(infraConfig)

	rootCmd.AddCommand(infraCmd)

	infraCmd.PersistentFlags().StringVarP(
		&infraConfigFile,
		"config-file",
		"c",
		"",
		"Path to infrastructure definition file ($MICRO_CONFIG_FILE)",
	)
	viper.BindPFlag("config-file", infraCmd.PersistentFlags().Lookup("config-file"))
}

// infraConfig is run before every infra command, parsing config using viper
func infraConfig() {
	// Defaults - can be overwritten in the config file or env variables, but undocumented atm
	viper.SetDefault("state-store", "aws")
	viper.SetDefault("aws-s3-bucket", "micro-platform-terraform-state")
	viper.SetDefault("aws-dynamodb-table", "micro-platform-terraform-state")

	// Handle env variables, e.g. --config-file flag can be set with MICRO_CONFIG_FILE
	viper.SetEnvPrefix("micro")
	viper.SetEnvKeyReplacer(strings.NewReplacer("-", "_"))
	viper.AutomaticEnv()

	cfgfile := viper.Get("config-file")
	if cfg, ok := cfgfile.(string); ok {
		if cfg == "" {
			infraCmd.Help()
			fmt.Fprintf(os.Stderr, "\nError: Config file is a required flag\n")
			os.Exit(1)
		}
		viper.SetConfigFile(cfg)
	} else {
		fmt.Fprintf(os.Stderr, "\nError: Config file flag malformed\n")
	}

	// Read in config
	if err := viper.ReadInConfig(); err == nil {
		fmt.Println("Using config file:", viper.ConfigFileUsed())
	} else {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			fmt.Fprintf(os.Stderr, "Error: Config file not found: %s\n", viper.Get("config-file"))
		}
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
		fmt.Fprintf(os.Stderr, "No platforms defined in config file %s\n", viper.Get("config-file"))
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
