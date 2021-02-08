import { TestBed } from '@angular/core/testing';

import { UsersHTTPService } from './users-http.service';

describe('UsersHTTPService', () => {
  let service: UsersHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
