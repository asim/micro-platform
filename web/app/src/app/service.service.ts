import { Injectable } from '@angular/core';
import * as types from './types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private us: UserService,
    private http: HttpClient
  ) { }

  list(): Promise<types.Service[]> {
    return new Promise<types.Service[]>((resolve, reject) => {
      return this.http
        .get<types.Service[]>(
          environment.backendUrl + '/v1/services?token=' + this.us.token()
        )
        .toPromise()
        .then(servs => {
          resolve(servs as types.Service[])
        })
    });
  }

  logs(service: string): Promise<types.LogRecord[]> {
    return new Promise<types.LogRecord[]>((resolve, reject) => {
      return this.http
        .get<types.LogRecord[]>(
          environment.backendUrl + '/v1/service/logs?service=' + service + '&token=' + this.us.token()
        )
        .toPromise()
        .then(servs => {
          resolve(servs as types.LogRecord[])
        })
    });
  }

  stats(service: string): Promise<types.DebugSnapshot[]> {
    return new Promise<types.DebugSnapshot[]>((resolve, reject) => {
      return this.http
        .get<types.DebugSnapshot[]>(
          environment.backendUrl + '/v1/service/stats?service=' + service + '&token=' + this.us.token()
        )
        .toPromise()
        .then(servs => {
          resolve(servs as types.DebugSnapshot[])
        })
    });
  }
}
