import { Component, OnInit, Input } from "@angular/core";
import * as types from "../types";
import * as _ from "lodash";

@Component({
  selector: "app-nodes",
  templateUrl: "./nodes.component.html",
  styleUrls: ["./nodes.component.css"]
})
export class NodesComponent implements OnInit {
  @Input() services: types.Service[] = [];
  nodes: types.Node[];
  constructor() {}

  ngOnInit() {
    this.nodes = _.flatten(this.services.map(s => s.nodes));
    this.nodes.push(this.nodes[0]);
  }

  metadata(node: types.Node) {
    let serialised = "No metadata.";
    if (!node.metadata) {
      return serialised;
    }
    serialised = "";
    const v = JSON.parse(JSON.stringify(node.metadata));
    for (var key in v) {
      serialised += key + ": " + node.metadata[key] + "\n";
    }
    return serialised;
  }
}
