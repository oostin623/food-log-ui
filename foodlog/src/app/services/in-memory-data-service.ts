import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from '../model/food';
import { LogRecord } from '../model/log-record';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const logDay = [
      new LogRecord(0, new Food(10, 'apple', 100, 20, 5, 10, '10 oz'), 1, '9-1-2018'),
      new LogRecord(1, new Food(11, 'derp', 100, 2, 5, 10), 1, '9-1-2018'),
      new LogRecord(2, new Food(12, 'greek yogurt', 180, 50, 5, 5, '1 cup'), 5, '9-1-2018'),
      new LogRecord(3, new Food(13, 'popcorn', 100, 1, 1, 1, '10 oz'), 2, '9-1-2018')
    ];

    const foods = [
      new Food(10, 'apple (medium)', 100),
      new Food(10, 'derp', 100, 2)
    ];

    return {logDay, foods};
  }
}
