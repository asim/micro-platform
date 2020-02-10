import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { ServiceService } from "../service.service";
import * as types from "../types";
import { ActivatedRoute } from "@angular/router";
import {PageEvent, MatPaginator} from '@angular/material/paginator';
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
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  services: types.Service[];
  logs: types.LogRecord[];
  stats: types.DebugSnapshot[];
  traceSpans: types.Span[];
  traceDatas: any[] = [];
  traceDatasPart: any[] = [];
  serviceName: string;
  endpointQuery: string;
  intervalId: any;
  
  public pageSize = 10;
  public currentPage = 0;
  public length = 0;

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  
  show(td) {
    td.show = !td.show
    return false;
  }

  prettyId(id: string) {
    return id.substring(0, 8)
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.traceDatas.slice(start, end);
    this.traceDatasPart = part;
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
      });
      this.ses.logs(this.serviceName).then(logs => {
        this.logs = logs;
      });
      this.ses.stats(this.serviceName).then(stats => {
        this.stats = stats;
        this.processStats();
      });
      this.ses.trace(this.serviceName).then(spans => {
        this.processTraces(spans);
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

  processTraces(spans: types.Span[]) {
    if (!spans) {
      return
    }
    const groupedSpans = _.values(_.groupBy(_.uniqBy(spans, "id"), "trace"));
    let traceDatas: any[] = [];
    groupedSpans.forEach(spanGroup => {
      const spansToDisplay = _.orderBy(
        spanGroup.map(d => {
          return [
            d.name,
            new Date(d.started / 1000000),
            new Date((d.started + d.duration) / 1000000)
          ];
        }),
        sp => {
          const row = sp as Date[];
          return row[1];
        },
        ["asc"]
      );
      const h = (spansToDisplay.length +1) * 40 + 40
      let traceData = {
        // Display related things
        traceId: spanGroup[0].trace,
        divHeight: h,
        // Chart related options
        chartType: "Timeline",
        dataTable: ([["Name", "From", "To"]] as any[][]).concat(spansToDisplay),
        options: {
          height: h,
          timeline: {
            tooltipDateFormat: 'HH:mm:ss.SSS',
          },
          hAxis: {
            format: 'yyyy-MM-dd HH:mm:ss.SSS',
            minValue: new Date((spansToDisplay[0][1] as Date).getTime() - 500),
            maxValue: new Date(
              (spansToDisplay[spansToDisplay.length - 1][2] as Date).getTime() +
                500
            )
          }
        }
      };
      traceDatas.push(traceData);
    });
    this.traceDatas = _.orderBy(traceDatas, td => td.dataTable.length, ['desc']);
    this.length = this.traceDatas.length;
    this.iterator();
  }

  processStats() {
    if (!this.stats) {
      return
    }
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const STAT_WINDOW = 8 * 60 * 1000; /* ms */
    this.stats = this.stats.filter(stat => {
      return Date.now() - stat.timestamp * 1000 < STAT_WINDOW;
    });
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
        fillcolor: "rgba(220,220,220,0.8)",
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
    //this.concurrencyRates.options.scales.yAxes[0].ticks.max = concMax * 1.5;
    this.gcRates.data = nodes.map(node => {
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
            let value = stat.gc;
            if (i == 0 && this.stats.length > 0) {
              const first = this.stats[0].gc ? this.stats[0].gc : 0;
              value = this.stats[1].gc - first;
            } else {
              const prev = this.stats[i - 1].gc ? this.stats[i - 1].gc : 0;
              value = this.stats[i].gc - prev;
            }
            return {
              x: new Date(stat.timestamp * 1000),
              y: value ? value : 0
            };
          })
      };
    });
  }

  // config options taken from https://www.chartjs.org/samples/latest/scales/time/financial.html
  options(ylabel: string, distribution?: string) {
    if (!distribution) {
      distribution = "series";
    }
    return {
      options: {
        maintainAspectRatio: false,
        animation: {
          duration: 0
        },
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: distribution,
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
  gcRates = this.options("garbage collection (nanoseconds/seconds)");
}
