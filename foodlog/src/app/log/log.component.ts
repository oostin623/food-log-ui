import { Component, OnInit, OnChanges } from '@angular/core';

//data objects
import { LogEntry } from '../LogEntry';
import { LogRecord } from '../log-record';
import { Food } from '../Food';
import { FOODS } from '../Mock_foods'; 

import  { LogService } from '../log.service';

@Component({
  selector: 'app-log',
  providers: [LogService],
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  //dummy data. TODO: move to a dummy service provider
	//logOne: LogEntry = new LogEntry(FOODS[0], "timestamp", 1);
	//logTwo: LogEntry = new LogEntry(FOODS[1], "timestamp", 4);
	//logThree: LogEntry = new LogEntry(FOODS[2], "timestamp ", 2.5);

	logRecords : LogRecord[];

  //logRecord :
  //  LogEntry[] =
  //  [this.logOne, this.logTwo, this.logThree];

	totalCal: number;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getLogRecords();
  }

  ngOnChanges() {
    this.getLogRecords();
  }



  /* calculates the total calories for a log entry */
  public getTotalCal(log: LogEntry): void {
    this.totalCal = log.food.calories * log.servings;
  }

  public getLogRecords(): void {
    this.logRecords = this.logService.getRecords();
  }

}
