import { TestBed, inject } from '@angular/core/testing';

import { LogDayService } from './logDay.service';

describe('LogDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogDayService]
    });
  });

  it('should be created', inject([LogDayService], (service: LogDayService) => {
    expect(service).toBeTruthy();
  }));
});
