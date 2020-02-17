import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import * as types from "../types";

const eventTypes = {
  1: "DepoymentCreated",
  2: "DepoymentDeleted",
  3: "DepoymentUpdated",
  4: "SourceUpdated"
};

const eventTypesNice = {
  1: "deployment created",
  2: "deployment deleted",
  3: "deployment updated",
  4: "source updated"
};

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  events: types.Event[] = [];

  constructor(private ses: ServiceService) {}

  ngOnInit() {
    this.ses.events().then(v => {
      this.events = v;
    });
  }

  eventTypeToString(e: types.Event): string {
    return eventTypesNice[e.type];
  }
}
