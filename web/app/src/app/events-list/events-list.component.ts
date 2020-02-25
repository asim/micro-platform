import { Component, OnInit, Input, Pipe } from "@angular/core";
import * as types from "../types";
import { mapToMapExpression } from "@angular/compiler/src/render3/util";

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

  commitUrl(e: types.Event): string {
    if (!e.metadata) {
      return "";
    }
    const repo = e.metadata.get("repo");
    const commitHash = e.metadata.get("commit");
    // https://github.com/micro/services/commit/f291afc98f624c44e34e758efab89e77546b709d
    return "https://" + repo + "/commit/" + commitHash;
  }

  buildUrl(e: types.Event): string {
    if (!e.metadata) {
      return "";
    }
    const repo = e.metadata.get("repo");
    const buildId = e.metadata.get("build");
    // eg. https://github.com/micro/services/runs/466859781
    return "https://" + repo + "/runs/" + buildId;
  }

  hasMeta(e: types.Event): boolean {
    return e.metadata && (e.metadata.has("commit") || e.metadata.has("build"));
  }

  visibleMeta(e: types.Event): Map<string, string> {
    if (!e.metadata) {
      return new Map();
    }
    return new Map([
      ["commit", e.metadata.get("commit")],
      ["build", e.metadata.get("build")]
    ]);
  }

  shortHash(s: string): string {
    return s.slice(0, 8);
  }
}
