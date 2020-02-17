package infrastructure

import (
	"fmt"
	"math/rand"
	"os"
	"testing"
	"time"
)

func TestTerraformModule(t *testing.T) {
	rand.Seed(time.Now().UnixNano())
	path := fmt.Sprintf("/tmp/test-module-%d", rand.Int31())
	if err := os.MkdirAll(path, 0o777); err != nil {
		t.Fatal(err)
	}
	defer os.RemoveAll(path)
	testModule := &TerraformModule{
		ID:   fmt.Sprintf("test-module-%d", rand.Int31()),
		Name: "test",
		Path: path,
	}
	if err := testModule.Validate(); err != nil {
		t.Fatal(err)
	}
}
