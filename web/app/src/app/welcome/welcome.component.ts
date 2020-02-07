import { Component, OnInit } from "@angular/core";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login() {
    window.location.href = environment.backendUrl + "/v1/github/login"
  }
}
