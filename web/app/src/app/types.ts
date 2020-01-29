export interface User {
  name: string;
  email: string;
}

export interface Value {
  name:   string;
  type:   string;
  values: Value[];
}

export interface Endpoint {
  name:     string;
  request:  Value;
  response: Value;
  metadata: Map<string, string>;
  title: string; // does not exist yet
  description: string; // does not exist yet
}

export interface Node {
  id:       string;
  address:  string;
  metadata: Map<string, string>;
}

export interface Service {
  name:      string;
  version:   string;
  metadata:  Map<string,string>;
  endpoints: Endpoint[];
  nodes:     Node[]; 
}

// taken from https://github.com/micro/micro/blob/master/debug/log/proto/log.proto
export interface LogRecord {
  timestamp: number;
  metadata: Map<string,string>;
  message: string;
}
