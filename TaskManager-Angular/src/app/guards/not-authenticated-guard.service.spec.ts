import { TestBed } from '@angular/core/testing';

import { NotAuthenticatedGuardService } from './not-authenticated-guard.service';

describe('NotAuthenticatedGuardService', () => {
  let service: NotAuthenticatedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotAuthenticatedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
