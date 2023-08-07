import { TestBed } from '@angular/core/testing';

import { RedirectionGuardService } from './redirection-guard.service';

describe('RedirectionGuardService', () => {
  let service: RedirectionGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectionGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
