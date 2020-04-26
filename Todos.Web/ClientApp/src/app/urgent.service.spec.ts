import { TestBed } from '@angular/core/testing';

import { UrgentService } from './urgent.service';

describe('UrgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrgentService = TestBed.get(UrgentService);
    expect(service).toBeTruthy();
  });
});
