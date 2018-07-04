import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { LogRecord } from '../log-record';
import { LogDayService } from '../logDay.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  logDay: LogRecord[] = [];
  
  constructor(private logDayService: LogDayService) { }

  ngOnInit() {
    this.getLogDay()
  }

  getLogDay() {
    this.logDayService.getLogDay()
    .subscribe(logDay => this.logDay = logDay);
  }

}