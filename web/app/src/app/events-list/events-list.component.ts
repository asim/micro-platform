import { Component, OnInit, Input } from "@angular/core";
import * as types from "../types";

const eventTypes = {
  1: "ServiceCreated",
  2: "ServiceDeleted",
  3: "ServiceUpdated",
  4: "SourceUpdated",
  5: "BuildStarted",
  6: "BuildFinished",
  7: "BuildFailed"
};

const eventTypesNice = {
  1: "service created",
  2: "service deleted",
  3: "service updated",
  4: "source updated",
  5: "build started",
  6: "build finished",
  7: "build failed"
};

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  @Input() events: types.Event[];
  query: string = "";

  constructor() {}

  ngOnInit() {}

  eventTypeToString(e: types.Event): string {
    return eventTypesNice[e.type];
  }
}
