echo "Creating source updated"
micro call go.micro.platform Platform.CreateEvent '{"event":{"service":{"name": "go.micro.srv.'$1'"}, "type": 4}}'
sleep 5
echo "Creating build started"
micro call go.micro.platform Platform.CreateEvent '{"event":{"service":{"name": "go.micro.srv.'$1'"}, "type": 5}}'
# Build failure test optional
sleep 5
echo "Creating build fail"
micro call go.micro.platform Platform.CreateEvent '{"event":{"service":{"name": "go.micro.srv.'$1'"}, "type": 7, "metadata":{"build": "4567863", "repo":"github.com/micro/services"}}}'
exit
sleep 60
echo "Creating build finished"
micro call go.micro.platform Platform.CreateEvent '{"event":{"service":{"name": "go.micro.srv.'$1'"}, "type": 6}}'
