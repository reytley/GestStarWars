import { TestBed } from '@angular/core/testing';

import { STARSHIPSDALService } from './starships-dal.service';

describe('STARSHIPSDALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: STARSHIPSDALService = TestBed.get(STARSHIPSDALService);
    expect(service).toBeTruthy();
  });
});
