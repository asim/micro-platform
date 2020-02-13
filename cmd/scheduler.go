package cmd

import (
	"fmt"

	"github.com/micro/platform/scheduler"
	"github.com/spf13/cobra"
)

// schedulerCmd represents the scheduler command
var schedulerCmd = &cobra.Command{
	Use:   "scheduler",
	Short: "Exits cleanly when platform updates",
	Long: `The scheduler command watches for update to the micro/platform on
the docker hub, then exits cleanly so the image can be restarted by
Kubernetes.`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("Waiting for updates")
		<-scheduler.New().Update()
	},
}

func init() {
	rootCmd.AddCommand(schedulerCmd)
}
