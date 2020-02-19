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
  events: types.Event[];

  selectedVersion = "";
  serviceName: string;
  endpointQuery: string;
  intervalId: any;
  refresh = true;

  selected = 0;
  tabValueChange = new Subject<number>();

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
        this.selectedVersion =
          this.services.filter(s => s.version == "latest").length > 0
            ? "latest"
            : this.services[0].version;
      });
      this.ses.events(this.serviceName).then(events => {
        this.events = events
      })
      this.loadVersionData();
    });
  }

  loadVersionData() {
    this.ses.logs(this.serviceName).then(logs => {
      this.logs = logs;
    });
    this.ses.trace(this.serviceName).then(spans => {
      this.traceSpans = spans;
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

  code: string = "{}";
}
