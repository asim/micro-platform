import { Component, OnInit, Input } from "@angular/core";
import * as types from "../types";

@Component({
  selector: "app-nodes",
  templateUrl: "./nodes.component.html",
  styleUrls: ["./nodes.component.css"]
})
export class NodesComponent implements OnInit {
  @Input() services: types.Service[] = [];
  constructor() {}

  ngOnInit() {}

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
}
