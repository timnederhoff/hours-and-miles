import { TestBed } from '@angular/core/testing';

import { HourMileService } from './hour-mile.service';

describe('HourMileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HourMileService = TestBed.get(HourMileService);
    expect(service).toBeTruthy();
  });
});
