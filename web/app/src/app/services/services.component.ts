import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import * as types from "../types";

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  services: Map<string, types.Service[]>;
  query: string;

  constructor(
    private ses: ServiceService,
  ) {}

  ngOnInit() {
    this.ses.list().then(servs => {
      this.services = groupBy(servs, "name");
    });
  }
}
