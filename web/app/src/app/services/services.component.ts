import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { ServiceService } from "../service.service";
import { UserService } from "../user.service";
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
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit {
  services: Map<string, types.Service[]>;
  query: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private cookie: CookieService,
    private ses: ServiceService,
    private us: UserService
  ) {}

  ngOnInit() {
    // This should not really happen here but hey... will do for now
    const queryParams = this.activeRoute.snapshot.queryParams;
    const token = queryParams["token"];
    if (token && token.length > 0) {
      this.cookie.set("token", token);
      this.us.get();
    }

    this.ses.list().then(servs => {
      this.services = groupBy(servs, "name");
    });
  }
}
