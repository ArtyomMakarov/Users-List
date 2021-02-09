import { TestBed } from '@angular/core/testing';

import { HeaderFilterParamsService } from './header-filter-params.service';

describe('HeaderFilterParamsService', () => {
  let service: HeaderFilterParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderFilterParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
