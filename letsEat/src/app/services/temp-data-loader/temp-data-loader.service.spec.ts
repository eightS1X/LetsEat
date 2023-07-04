import { TestBed } from '@angular/core/testing';

import { TempDataLoaderService } from './temp-data-loader.service';

describe('TempDataLoaderService', () => {
  let service: TempDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
