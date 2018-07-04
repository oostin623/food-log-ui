import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { Food } from '../Food';
import { LogRecord } from '../log-record';
import  { LogDayService } from '../logDay.service';


@Component({
  selector: 'app-log-form',
  providers: [],
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  logDay: LogRecord[] = [];
  formLogRecord: LogRecord = new LogRecord(null, null, 1, new Date(Date.now()));
  submitted = false;



 mockFoods: Food[]
  = [
   new Food(10, "apple (medium)", 80),
   new Food(11, "cake", 120),
   new Food(12, "cerial", 110)
  ];

  // inject the log service
  constructor(private logDayService: LogDayService) { }

  // initialize the logDay from the service
  ngOnInit() { 
    this.getLogDay();
  }

  /** Get the initial LogDay state from the service */
  getLogDay(): void {
    this.logDayService.getLogDay()
      .subscribe(logDay => this.logDay = logDay);
  }

  /** form submission */
  onSubmit() {
  	this.submitted = true;
    this.logDayService.addLogRecord(this.formLogRecord)
      .subscribe(logRecord => {
        this.logDay.push(logRecord);
      });
  	this.newRecord();
  }



  // create a new log record
  newRecord() {
    this.formLogRecord = new LogRecord(null, null, 1, new Date(Date.now()));
  }

  // takes an "HH:MM" string and updates the hour and minute on the record's date
  setDateTime(time : number) {
  	var date : Date = new Date(this.formLogRecord.date);
  	var hm : string[] = time.toString().split(":");
  	date.setHours(Number.parseInt(hm[0]), Number.parseInt(hm[1]));
  	return date;
  }

  //TODO: remove when we are done
  get diagnostic() { 
  	return JSON.stringify(this.formLogRecord);
  }
}
