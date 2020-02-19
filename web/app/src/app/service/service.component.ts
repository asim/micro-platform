import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ServiceService } from "../service.service";
import * as types from "../types";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import * as _ from "lodash";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: [
    "./service.component.css",
    "../../../node_modules/nvd3/build/nv.d3.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class ServiceComponent implements OnInit {
  services: types.Service[];
  logs: types.LogRecord[];
  stats: types.DebugSnapshot[];
  traceSpans: types.Span[];
  traceDatas: any[] = [];
  selectedVersion = "";

  serviceName: string;
  endpointQuery: string;
  intervalId: any;
  refresh = true;

  selected = 0;
  tabValueChange = new Subject<number>();

  show(td) {
    td.show = !td.show;
    return false;
  }

  metadata(node: types.Node) {
    let serialised = "No metadata.";
    if (!node.metadata) {
      return serialised;
    }
    serialised = "";
    const v = JSON.parse(JSON.stringify(node.metadata));
    console.log(v);
    for (var key in v) {
      serialised += key + ": " + node.metadata[key] + "\n";
    }
    return serialised;
  }

  constructor(
    private ses: ServiceService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(p => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.serviceName = <string>p["id"];
      this.ses.list().then(servs => {
        this.services = servs.filter(s => s.name == this.serviceName);
        this.services.forEach(service => {
          service.endpoints.forEach(endpoint => {
            endpoint.requestJSON = this.valueToJson(endpoint.request, 1);
          });
        });
        this.selectedVersion =
          this.services.filter(s => s.version == "latest").length > 0
            ? "latest"
            : this.services[0].version;
      });
      this.loadVersionData();
    });
  }

  pickVersion(services: types.Service[]): types.Service[] {
    return services.filter(s => {
      return s.version == this.selectedVersion;
    });
  }

  loadVersionData() {
    this.ses.logs(this.serviceName).then(logs => {
      this.logs = logs;
    });
    this.ses.trace(this.serviceName).then(spans => {
      this.traceSpans = spans
    });
    this.intervalId = setInterval(() => {
      if (this.selected !== 2 || !this.refresh) {
        return;
      }
      this.ses.stats(this.serviceName).then(stats => {
        this.stats = stats;
      });
    }, 5000);
    this.tabValueChange.subscribe(index => {
      if (index !== 2 || !this.refresh) {
        return;
      }
      this.ses.stats(this.serviceName).then(stats => {
        this.stats = stats;
      });
    });
  }

  versionSelected(service: types.Service) {
    if (this.selectedVersion == service.version) {
      this.selectedVersion = "";
      return;
    }
    this.selectedVersion = service.version;
    this.loadVersionData();
  }

  tabChange($event: number) {
    this.selected = $event;
    this.tabValueChange.next(this.selected);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  valueToString(input: types.Value, indentLevel: number): string {
    if (!input) return "";

    const indent = Array(indentLevel).join("    ");
    const fieldSeparator = `,\n`;

    if (input.values) {
      return `${indent}${input.type} ${indentLevel == 1 ? "" : input.name} {
${input.values
  .map(field => this.valueToString(field, indentLevel + 1))
  .join(fieldSeparator)}
${indent}}`;
    } else if (indentLevel == 1) {
      return `${indent}${input.name} {}`;
    }

    return `${indent}${input.type} ${input.name}`;
  }

  // This is admittedly a horrible temporary implementation
  valueToJson(input: types.Value, indentLevel: number): string {
    const typeToDefault = (type: string): string => {
      switch (type) {
        case "string":
          return '""';
        case "int":
        case "int32":
        case "int64":
          return "0";
        case "bool":
          return "false";
        default:
          return "{}";
      }
    };

    if (!input) return "";

    const indent = Array(indentLevel).join("    ");
    const fieldSeparator = `,\n`;
    if (input.values) {
      return `${indent}${indentLevel == 1 ? "{" : '"' + input.name + '": {'}
${input.values
  .map(field => this.valueToJson(field, indentLevel + 1))
  .join(fieldSeparator)}
${indent}}`;
    } else if (indentLevel == 1) {
      return `{}`;
    }

    return `${indent}"${input.name}": ${typeToDefault(input.type)}`;
  }

  callEndpoint(service: types.Service, endpoint: types.Endpoint) {
    this.ses
      .call({
        endpoint: endpoint.name,
        service: service.name,
        address: service.nodes[0].address,
        method: "POST",
        request: endpoint.requestJSON
      })
      .then(rsp => {
        endpoint.responseJSON = rsp;
      });
  }

  // Stats/ Chart related things

  prettyTime(ms: number): string {
    if (ms < 1000) {
      return Math.floor(ms) + "ms";
    }
    return (ms / 1000).toFixed(3) + "s";
  }

  traceDuration(spans: (String | Date)[][]): string {
    const durations = spans.slice(1).map(span => {
      return (span[3] as Date).getTime() - (span[2] as Date).getTime();
    });

    return this.prettyTime(durations.reduce((a, b) => a + b, 0));
  }

  getEndpointName(service: types.Service, spans: (String | Date)[][]): string {
    return (spans.slice(1).filter(span => {
      return (span[1] as string).includes(service.name);
    })[0][1] as string)
      .split(":")[1]
      .split(" ")[1];
  }

  // code editor
  coptions = {
    theme: "vs-dark",
    language: "json"
  };

  code: string = "{}";
}
