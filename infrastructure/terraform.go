package infrastructure

import (
	"bufio"
	"context"
	"fmt"
	"io"
	"os"
	"os/exec"
	"strings"

	"github.com/pkg/errors"
)

// TerraformModule is a task that applies a terraform module
type TerraformModule struct {
	// ID is a persistent unique ID for the name of the stored state
	ID string
	// Name is the name of the module - for logging purposes
	Name string
	// Path is the path to the module. It's set to working directory for terraform
	Path string
	// Source is a terraform module source.
	// See https://www.terraform.io/docs/modules/sources.html
	Source string
	// Any environment variables to pass to terraform
	Env map[string]string
	// Any terraform variables
	Variables map[string]string
}

// Validate Runs terraform init and terraform plan
func (t *TerraformModule) Validate() error {
	if err := t.execTerraform(context.Background(), "init"); err != nil {
		return err
	}
	return t.execTerraform(context.Background(), "plan")
}

func (t *TerraformModule) execTerraform(ctx context.Context, args ...string) error {
	// Set up terraform command
	tf := exec.CommandContext(ctx, "terraform", args...)
	tf.Dir = t.Path
	tf.Env = os.Environ()
	for k, v := range t.Env {
		tf.Env = append(tf.Env, fmt.Sprintf("%s=%s", k, v))
	}
	for k, v := range t.Variables {
		tf.Env = append(tf.Env, fmt.Sprintf("TF_VAR_%s=%s", k, v))
	}
	stdout, err := tf.StdoutPipe()
	if err != nil {
		return errors.Wrap(err, "StdoutPipe failed")
	}
	stderr, err := tf.StderrPipe()
	if err != nil {
		return errors.Wrap(err, "StderrPipe failed")
	}

	for _, ioPair := range []struct {
		in  io.ReadCloser
		out *os.File
	}{
		{in: stdout, out: os.Stdout},
		{in: stderr, out: os.Stderr},
	} {
		go func(name string, in io.ReadCloser, out *os.File) {
			r := bufio.NewReader(in)
			defer in.Close()
			for {
				s, err := r.ReadString('\n')
				s = strings.TrimSpace(s)
				if err == nil || err == io.EOF {
					if len(s) != 0 {
						fmt.Fprintf(out, "[%s] %s\n", name, s)
					}
					if err == io.EOF {
						return
					}
				} else {
					fmt.Fprintf(out, "[%s] Error: %s\n", name, err.Error())
					return
				}
			}
		}(t.Name, ioPair.in, ioPair.out)
	}
	if err := tf.Start(); err != nil {
		return errors.Wrap(err, "Couldn't execute terraform")
	}

	return tf.Wait()
}
