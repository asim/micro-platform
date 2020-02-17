import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from "../user.service";
import { ServiceService } from "../service.service";
import * as types from "../types";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-service",
  templateUrl: "./new-service.component.html",
  styleUrls: ["./new-service.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class NewServiceComponent implements OnInit {
  serviceName = "";
  code: string = "";
  intervalId: any;
  events: types.Event[] = [];
  services: types.Service[] = [];
  step = 0;
  stepLabels = [
    "We are waiting for you to push your service...",
    "Found your service on GitHub. Deploying now...",
    "Ready to roll! Redirecting you to your service page..."
  ];
  isOnGithub = false;
  isInRegistry = false;
  progressPercentage = 33;

  constructor(
    private us: UserService,
    private ses: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newCode();
    this.intervalId = setInterval(() => {
      this.ses.events(this.serviceName).then(events => {
        this.events = events;
        this.checkEvents();
      });
      this.ses.list().then(services => {
        this.services = services;
        this.checkServices();
      });
    }, 3000);
  }

  checkEvents() {
    this.isOnGithub =
      this.events.filter(e => {
        return e.service.name == this.serviceName;
      }).length > 0;
    if (this.isOnGithub && this.step < 1) {
      this.step = 1;
      this.progressPercentage = 66;
    }
  }

  checkServices() {
    this.isInRegistry =
      this.services.filter(e => {
        return e.name == this.serviceName;
      }).length > 0;
    if (this.isInRegistry && this.step < 2) {
      this.step = 2;
      this.progressPercentage = 100;
      setTimeout(() => {
        this.router.navigate(["/service/" + this.serviceName]);
      }, 2000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  languages = ["bash"];

  newCode() {
    this.code =
      `# Don't forget to log in here: https://micro.mu/platform/settings/tokens
git clone https://github.com/micro/services

cd services
micro new ` +
      this.serviceName +
      `
cd ` +
      this.serviceName +
      `

make build

git config --local core.hooksPath .githooks
git add .
git commit -m "Initializing ` +
      this.serviceName +
      `"
git push

micro run --platform ` +
      this.serviceName;
  }
}
