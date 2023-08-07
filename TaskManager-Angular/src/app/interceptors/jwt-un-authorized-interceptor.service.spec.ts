import { TestBed } from '@angular/core/testing';

import { JwtUnAuthorizedInterceptorService } from './jwt-un-authorized-interceptor.service';

describe('JwtUnAuthorizedInterceptorService', () => {
  let service: JwtUnAuthorizedInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtUnAuthorizedInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
