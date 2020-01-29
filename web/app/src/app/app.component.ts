import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import * as types from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'micro';
  user: types.User;

  constructor(
    private cookie: CookieService,
    public us: UserService,
  ) { }

  ngOnInit() {
    this.user = this.us.user;
  }
}
