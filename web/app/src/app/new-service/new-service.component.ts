import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Location } from "@angular/common";
import { UserService } from "../user.service";
import { ServiceService } from "../service.service";
import * as types from "../types";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";

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
    private router: Router,
    private location: Location,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(p => {
      const id = <string>p["id"];
      if (id) {
        this.alias = _.last(id.split("."));
      }
      this.regen();
    });

    this.token = this.us.token();
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
    }, 1500);

    this.progressPercentage = this.percenTages[this.step];
  }

  keyPress(event: any) {
    this.lastKeypress = new Date();
    this.location.replaceState("/service/new/" + this.serviceName);
  }

  checkEvents() {
    if (
      !this.serviceName ||
      new Date().getTime() - this.lastKeypress.getTime() < 1500
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
        this.startBuildTimer(e);
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
  startBuildTimer(e: types.Event) {
    const intervalSecs = 0.1;
    const secRange = this.maxBuildTimer - this.minBuildTimer;
    const secsSinceBuild =
      (new Date().getTime() - new Date(e.timestamp * 1000).getTime()) / 1000;
    if (secsSinceBuild > secRange) {
      this.buildTimer = this.minBuildTimer;
      this.progressPercentage = this.progressPercentage[3];
      return;
    }

    const ratio = secsSinceBuild / secRange;
    this.buildTimer -= secRange * ratio;
    const percentageRange = this.percenTages[3] - this.percenTages[2];
    this.progressPercentage = this.percenTages[2] + percentageRange * ratio;

    const percentageStep = secRange / intervalSecs;
    this.buildTimerIntervalId = setInterval(() => {
      if (this.step !== 2) {
        return;
      }
      // the numbers below will depend heavily on the interval parameter of
      // the setInterval function

      if (this.buildTimer - intervalSecs <= this.minBuildTimer) {
        this.buildTimer = this.minBuildTimer;
        this.stopBuildTimer();
        return;
      }
      this.buildTimer -= intervalSecs;

      // calculating how much to add based on the difference in percentage between
      // the third and second step.
      this.progressPercentage +=
        (this.percenTages[3] - this.percenTages[2]) / percentageStep;
    }, intervalSecs * 1000);
  }

  checkServices() {
    if (
      !this.serviceName ||
      new Date().getTime() - this.lastKeypress.getTime() < 1500
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
