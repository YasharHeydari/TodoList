import { TestBed } from '@angular/core/testing';

import { LastMonthService } from './last-month.service';

describe('LastMonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastMonthService = TestBed.get(LastMonthService);
    expect(service).toBeTruthy();
  });
});
