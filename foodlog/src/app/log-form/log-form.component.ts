import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { LogRecord } from '../model/log-record';
import { LogDayService } from '../services/logDay.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-log-form',
  providers: [],
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  logDay: LogRecord[] = [];
  foodDict: Food[] = [];
  formLogRecord: LogRecord = new LogRecord(null, null, 1, null);
  submitted = false;

  constructor(
    private logDayService: LogDayService,
    private foodService: FoodService) { }

  /** initial subscription to the shared services */
  ngOnInit() {
    this.foodService.getFoodDict()
      .subscribe(data => this.foodDict = data);
    this.logDayService.getLogDay()
      .subscribe(data => this.logDay = data);
  }

  onSubmit() {
    this.submitted = true;
    this.logDayService.addRecord(this.formLogRecord);
    this.newRecord();
  }

  newRecord() {
    this.formLogRecord = new LogRecord(null, null, 1, null);
  }

  // TODO: fix this
  // takes an "HH:MM" string and updates the hour and minute on the record's date
/*   setDateTime(time : number) {
    var date : Date = new Date(this.formLogRecord.date);
    var hm : string[] = time.toString().split(":");
    date.setHours(Number.parseInt(hm[0]), Number.parseInt(hm[1]));
    return date;
  } */

}
