import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { LogRecord } from '../log-record';
import { LogService } from '../log.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  logDay: LogRecord[] = [];
  
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getLogDay()
  }

  getLogDay() {
    this.logService.getLogDay()
    .subscribe(logDay => this.logDay = logDay);
  }

}