import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { Food } from '../Food';
import { LogRecord } from '../log-record';
import  { LogDayService } from '../logDay.service';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-log-form',
  providers: [],
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  logDay: LogRecord[] = [];
  foodDict: Food[] = [];
  formLogRecord: LogRecord = new LogRecord(null, null, 1, new Date(Date.now()));
  submitted = false;

  constructor(
    private logDayService: LogDayService,
    private foodService: FoodService) { }

  /** initial subscription to the shared services */
  ngOnInit() { 
    this.getFoodDict();
    this.getLogDay();
  }

  getFoodDict(): void {
    this.foodService.getFoodDict()
      .subscribe(foodDict => this.foodDict = foodDict);
  }

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

  newRecord() {
    this.formLogRecord = new LogRecord(null, null, 1, new Date(Date.now()));
  }

  //TODO: fix this
  // takes an "HH:MM" string and updates the hour and minute on the record's date
  setDateTime(time : number) {
  	var date : Date = new Date(this.formLogRecord.date);
  	var hm : string[] = time.toString().split(":");
  	date.setHours(Number.parseInt(hm[0]), Number.parseInt(hm[1]));
  	return date;
  }

}
