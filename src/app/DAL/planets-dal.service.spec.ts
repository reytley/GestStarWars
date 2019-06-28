import { TestBed } from '@angular/core/testing';

import { PlanetsDalService } from './planets-dal.service';

describe('PlanetsDalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetsDalService = TestBed.get(PlanetsDalService);
    expect(service).toBeTruthy();
  });
});
