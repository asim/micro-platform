import { Component, OnInit, Input } from "@angular/core";
import * as types from "../types";

const eventTypes = {
  1: "DepoymentCreated",
  2: "DepoymentDeleted",
  3: "DepoymentUpdated",
  4: "SourceUpdated",
  5: "BuildStarted",
  6: "BuildFinished"
};

const eventTypesNice = {
  1: "deployment created",
  2: "deployment deleted",
  3: "deployment updated",
  4: "source updated",
  5: "build started",
  6: "build finished"
};

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  @Input() events: types.Event[];

  constructor() {}

  ngOnInit() {}

  eventTypeToString(e: types.Event): string {
    return eventTypesNice[e.type];
  }
}
