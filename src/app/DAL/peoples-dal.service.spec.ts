import { TestBed } from '@angular/core/testing';

import { PeoplesDalService } from './peoples-dal.service';

describe('PeoplesDalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeoplesDalService = TestBed.get(PeoplesDalService);
    expect(service).toBeTruthy();
  });
});
