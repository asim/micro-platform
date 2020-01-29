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
      this.intervalId = setInterval(() => {
        this.ses.stats(this.serviceName).then(stats => {
          this.stats = stats;
          this.processStats();
        });
      }, 5000);
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
        label: node,
        type: "line",
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2,
        data: this.stats
          .filter(stat => stat.service.node.id == node)
          .map((stat, i) => {
            let value = stat.requests;
            if (i == 0 && this.stats.length > 0) {
              const first = this.stats[0].requests ? this.stats[0].requests : 0;
              value = this.stats[1].requests - first;
            } else {
              const prev = this.stats[i - 1].requests
                ? this.stats[i - 1].requests
                : 0;
              value = this.stats[i].requests - prev;
            }
            return {
              x: new Date(stat.timestamp * 1000),
              y: value ? value : 0
            };
          })
      };
    });

    this.memoryRates.data = nodes.map(node => {
      return {
        label: node,
        type: "line",
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2,
        data: this.stats
          .filter(stat => stat.service.node.id == node)
          .map((stat, i) => {
            let value = stat.memory;
            return {
              x: new Date(stat.timestamp * 1000),
              y: value ? value / (1000 * 1000) : 0
            };
          })
      };
    });
    this.errorRates.data = nodes.map(node => {
      return {
        label: node,
        type: "line",
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2,
        data: this.stats
          .filter(stat => stat.service.node.id == node)
          .map((stat, i) => {
            let value = stat.errors;
            if (i == 0 && this.stats.length > 0) {
              const first = this.stats[0].errors ? this.stats[0].errors : 0;
              value = this.stats[1].errors - first;
            } else {
              const prev = this.stats[i - 1].errors
                ? this.stats[i - 1].errors
                : 0;
              value = this.stats[i].errors - prev;
            }
            return {
              x: new Date(stat.timestamp * 1000),
              y: value ? value : 0
            };
          })
      };
    });
    let concMax = 0;
    this.concurrencyRates.data = nodes.map(node => {
      return {
        label: node,
        type: "line",
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2,
        data: this.stats
          .filter(stat => stat.service.node.id == node)
          .map((stat, i) => {
            let value = stat.threads;
            if (value > concMax) {
              concMax = value;
            }
            return {
              x: new Date(stat.timestamp * 1000),
              y: value ? value : 0
            };
          })
      };
    });
    this.concurrencyRates.options.scales.yAxes[0].ticks.max = concMax * 1.5;
  }

  // config options taken from https://www.chartjs.org/samples/latest/scales/time/financial.html
  options(ylabel: string) {
    return {
      options: {
        animation: {
          duration: 0
        },
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              offset: true,
              ticks: {
                major: {
                  enabled: true,
                  fontStyle: "bold"
                },
                source: "data",
                autoSkip: true,
                autoSkipPadding: 75,
                maxRotation: 0,
                sampleSize: 100
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false
              },
              scaleLabel: {
                display: true,
                labelString: ylabel
              }
            }
          ]
        },
        tooltips: {
          intersect: false,
          mode: "index",
          callbacks: {
            label: function(tooltipItem, myData) {
              var label = myData.datasets[tooltipItem.datasetIndex].label || "";
              if (label) {
                label += ": ";
              }
              label += parseFloat(tooltipItem.value).toFixed(2);
              return label;
            }
          }
        }
      },
      data: [],
      lineChartType: "line"
    };
  }
  memoryRates = this.options("memory usage (MB)");
  requestRates = this.options("requests/second");
  errorRates = this.options("errors/second");
  concurrencyRates = this.options("goroutines");
}
