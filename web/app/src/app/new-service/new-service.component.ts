import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {
  code: string;
  constructor(private us: UserService) { }

  ngOnInit() {
    this.code = "micro login --token " + this.us.token()
  }

}
