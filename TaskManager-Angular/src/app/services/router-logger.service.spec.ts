import { TestBed } from '@angular/core/testing';

import { RouterLoggerService } from './router-logger.service';

describe('RouterLoggerService', () => {
  let service: RouterLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
