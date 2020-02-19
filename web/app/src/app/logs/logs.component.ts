import { Component, OnInit, Input } from '@angular/core';
import * as types from '../types';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  @Input() logs: types.LogRecord[] = [];

  constructor() { }

  ngOnInit() {
  }

}
