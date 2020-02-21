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
  runCode: string = "";
  token = "";
  intervalId: any;
  lastKeypress = new Date();
  events: types.Event[] = [];
  services: types.Service[] = [];
  lastInput;
  step = 3;
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
    this.token = this.us.token();
    this.lastKeypress.setDate(this.lastKeypress.getDate() + 14);
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

  keyPress(event: any) {
    this.lastKeypress = new Date();
  }

  checkEvents() {
    if (
      !this.serviceName ||
      new Date().getTime() - this.lastKeypress.getTime() < 3000
    ) {
      return;
    }
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
    if (
      !this.serviceName ||
      new Date().getTime() - this.lastKeypress.getTime() < 2000
    ) {
      return;
    }
    const inRegistry =
      this.services.filter(e => {
        return e.name == "go.micro.srv." + this.serviceName;
      }).length > 0;
    if (inRegistry && this.step < 4) {
      this.step = 4;
      this.progressPercentage = 100;
      setTimeout(() => {
        this.router.navigate(["/service/go.micro.srv." + +this.serviceName]);
      }, 3000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  regen() {
    this.newCode();
    this.newRunCode();
  }

  languages = ["bash"];

  newCode() {
    this.code =
      `# Checkout the services repo
git clone https://github.com/micro/services && cd services
# Create new service
micro new ` +
      this.serviceName +
      `
cd ` +
      this.serviceName +
      `
# Build the service
make build
# Push to GitHub
git config --local core.hooksPath .githooks
git add . && git commit -m "Initialising service ` +
      this.serviceName +
      `" && git push`;
  }

  newRunCode() {
    this.runCode = `micro run --platform ` + this.serviceName;
  }
}
