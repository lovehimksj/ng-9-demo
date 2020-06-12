import { TestBed } from '@angular/core/testing';

import { HttpReqInterceptor } from './http-interceptor.interceptor';

describe('HttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpReqInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpReqInterceptor = TestBed.inject(HttpReqInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
