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
  alias = "";
  namespace = "go.micro";
  serviceType = "srv";
  serviceName = "";
  code: string = "";
  runCode: string = "";
  token = "";
  intervalId: any;
  buildTimerIntervalId: any;
  lastKeypress = new Date();
  events: types.Event[] = [];
  services: types.Service[] = [];
  lastInput;
  step = 0;
  // approximate time it will take to finisht the build
  maxBuildTimer = 60;
  minBuildTimer = 5;
  buildTimer = this.maxBuildTimer;
  progressPercentage = 0;
  percenTages = [0, 10, 20, 80];
  stepLabels = (): string[] => {
    return [
      "We are waiting for you to push your service...",
      "Found your service on GitHub. Waiting for the build to start...",
      "Build is in progress. Build finishes in about " +
        this.buildTimer.toFixed(1) +
        " seconds...",
      "Build finished. Waiting for you to start your service...",
      "Ready to roll! Redirecting you to your service page..."
    ];
  };

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
    this.serviceName =
      this.namespace + "." + this.serviceType + "." + this.alias;

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
    this.progressPercentage = this.percenTages[this.step];
    this.startBuildTimer();
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
        this.progressPercentage = this.percenTages[1];
      }
      // build started
      if (e.type == 5 && this.step < 2) {
        this.step = 2;
        this.progressPercentage = this.percenTages[2];
      }
      // build finished
      if (e.type == 6 && this.step < 3) {
        this.step = 3;
        this.progressPercentage = this.percenTages[3];
      }
    });
  }

  stopBuildTimer() {
    if (this.buildTimerIntervalId) {
      clearInterval(this.buildTimerIntervalId);
    }
  }

  // the timer will only kick off after step 2
  startBuildTimer() {
    const intervalMs = 100;
    this.buildTimerIntervalId = setInterval(() => {
      if (this.step !== 2) {
        return;
      }
      // the numbers below will depend heavily on the interval parameter of
      // the setInterval function
      const secs = intervalMs / 1000;
      if (this.buildTimer - secs <= this.minBuildTimer) {
        this.buildTimer = this.minBuildTimer;
        this.stopBuildTimer();
        return;
      }
      this.buildTimer -= secs;
      const div = (this.maxBuildTimer - this.minBuildTimer) / secs;

      // calculating how much to add based on the difference in percentage between
      // the third and second step.
      this.progressPercentage +=
        (this.percenTages[3] - this.percenTages[2]) / div;
    }, intervalMs);
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
        return e.name == this.serviceName;
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

  regen() {
    this.serviceName =
      this.namespace + "." + this.serviceType + "." + this.alias;
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
      this.alias +
      `
cd ` +
      this.alias +
      `
# Build the service
make build
# Push to GitHub
git config --local core.hooksPath .githooks
git add . && git commit -m "Initialising service ` +
      this.alias +
      `" && git push`;
  }

  newRunCode() {
    this.runCode = `micro run --platform ` + this.alias;
  }
}
