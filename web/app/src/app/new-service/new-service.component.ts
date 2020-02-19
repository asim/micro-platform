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
  serviceName = "asdasd";
  code: string = "";
  runCode: string = "";
  intervalId: any;
  events: types.Event[] = [];
  services: types.Service[] = [];
  step = 0;
  progressPercentage = 0;
  stepLabels = [
    "We are waiting for you to push your service...",
    "Found your service on GitHub. Waiting for the build to start...",
    "Build is in progress. This might take a few minutes...",
    "Build finished. Waiting for you to start your service...",
    "Ready to roll! Redirecting you to your service page..."
  ];

  constructor(
    private us: UserService,
    private ses: ServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newCode();
    this.newRunCode();
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
    this.events.forEach(e => {
      if (e.service.name != this.serviceName) {
        return;
      }
      // source updated
      if (e.type == 4 && this.step < 1) {
        this.step = 1;
        this.progressPercentage = 25;
      }
      // build started
      if (e.type == 5 && this.step < 2) {
        this.step = 2;
        this.progressPercentage = 50;
      }
      // build finished
      if (e.type == 6 && this.step < 3) {
        this.step = 3;
        this.progressPercentage = 75;
      }
    });
  }

  checkServices() {
    const inRegistry =
      this.services.filter(e => {
        return e.name == "go.micro.srv." + this.serviceName;
      }).length > 0;
    if (inRegistry && this.step < 4) {
      this.step = 4;
      this.progressPercentage = 100;
      setTimeout(() => {
        this.router.navigate(["/service/" + this.serviceName]);
      }, 3000);
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
git clone git@github.com:micro/services.git

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
git push`;
  }

  newRunCode() {
    this.runCode = `micro run --platform ` + this.serviceName;
  }
}
