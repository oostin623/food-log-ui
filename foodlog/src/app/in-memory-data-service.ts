import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './Food';
import { LogRecord } from './log-record';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const logDay = [
      new LogRecord(0, new Food(10, "apple (medium)", 100/*, 20, 5, 10, "10 oz"*/), 1, new Date(Date.now())),
      new LogRecord(10, new Food(10, "derp", 100, 2), 1, new Date(Date.now())),
      new LogRecord(1, new Food(11, "greek yogurt", 180/*, 50, 5, 5, "1 cup" */), 5, new Date(Date.now())),
      new LogRecord(2, new Food(12, "popcorn (snack bag)", 100/*, 1, 1, 1, "10 oz"*/), 2, new Date(Date.now()))
    ];

    const foods = [
      new Food(10, "apple (medium)", 100),
      new Food(10, "derp", 100, 2)
    ];

    return {logDay, foods};
  }
}