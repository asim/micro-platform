import { Injectable } from '@angular/core';
import * as types from './types';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class UserService {
  public user: types.User = {} as types.User;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private notif: NotificationsService
    ) {
    this.get().then(user => {
      for (const k of Object.keys(user)) {
        this.user[k] = user[k];
      }
    }).catch(e => {
      console.log(e)
    });
  }

  loggedIn(): boolean {
     return this.token() && this.token().length > 0
  }

  logout() {
    // todo We are nulling out the name here because that's what we use
    // for user existence checks.
    this.user.name = ''
    this.cookie.set("token", "")
    document.location.href = "/"
  }

  token(): string {
    return this.cookie.get("token")
  }

  // gets current user
  get(): Promise<types.User> {
    return new Promise<types.User>((resolve, reject) => {
      if (!this.token() || this.token().length === 0) {
        setTimeout(function() {
          resolve({} as types.User);
        }, 1); // hack to get around navbar router.isActive not being ready immediately
        return;
      }
      return this.http
        .get<types.User>(
          environment.backendUrl + '/v1/user?token=' + this.token()
        )
        .toPromise()
        .then(user => {
          for (const k of Object.keys(user)) {
            this.user[k] = user[k];
          }
          resolve(user);
        }).catch(e => {
          if (e && e.error && e.error.error == "not found") {
            return
          }
          console.log(e)
          this.notif.error("User load error", JSON.stringify(e))
        });
    })
  }

}