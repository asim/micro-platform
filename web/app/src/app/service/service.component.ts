import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ServiceService } from "../service.service";
import * as types from "../types";
import { ActivatedRoute } from "@angular/router";

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
  serviceName: string;
  endpointQuery: string;
  intervalId: any;

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
      });
      this.ses.logs(this.serviceName).then(logs => {
        this.logs = logs;
      });
      this.ses.stats(this.serviceName).then(stats => {
        this.stats = stats;
        this.processStats();
      });
    });
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
      return `${indent}${input.type} ${input.name} {
${input.values
  .map(field => this.valueToString(field, indentLevel + 1))
  .join(fieldSeparator)}
${indent}}`;
    }

    return `${indent}${input.type} ${input.name}`;
  }

  // Stats/ Chart related things

  processStats() {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const nodes = this.stats
      .map(stat => stat.service.node.id)
      .filter(onlyUnique);
    this.requestRates.data = nodes.map(node => {
      return {
        name: node,
        series: this.stats
          .filter(stat => stat.service.node.id == node)
          .map((stat, i) => {
            let value = stat.requests
            //if (i == 0 && this.stats.length > 0) {
            //  const first = this.stats[0].requests ? this.stats[0].requests : 0
            //  value = this.stats[1].requests - first
            //} else {
            //  const prev = this.stats[i-1].requests ? this.stats[i-1].requests : 0
            //  value = this.stats[i].requests - prev
            //}
            return {
              name: new Date(stat.timestamp * 1000),
              value: value ? value : 0 
            };
          })
      };
    });
    console.log(this.requestRates.data);
  }



  // options
  requestRates = {
    view: [700, 300],
    legend: true,
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: "time",
    yAxisLabel: "req/s",
    timeline: false,
    legendTitle: "Nodes",

    colorScheme: {
      domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
    },

    data: [],
    onSelect (data): void {
      //console.log("Item clicked", JSON.parse(JSON.stringify(data)));
    },
  
    onActivate(data): void {
      //console.log("Activate", JSON.parse(JSON.stringify(data)));
    },
  
    onDeactivate(data): void {
     // console.log("Deactivate", JSON.parse(JSON.stringify(data)));
    },

    lineChartType: "line",
    lineChartPlugins: [],
  };


}
