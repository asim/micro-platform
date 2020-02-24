micro call go.micro.platform Platform.CreateEvent '{"event":{"service":{"name": "go.micro.srv.'$1'"}, "type": 4}}'
sleep 5
micro call go.micro.platform Platform.CreateEvent '{"event":{"service":{"name": "go.micro.srv.'$1'"}, "type": 5}}'
sleep 60
micro call go.micro.platform Platform.CreateEvent '{"event":{"service":{"name": "go.micro.srv.'$1'"}, "type": 6}}'
