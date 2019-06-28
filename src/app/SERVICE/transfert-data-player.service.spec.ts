import { TestBed } from '@angular/core/testing';

import { TransfertDataPlayerService } from './transfert-data-player.service';

describe('TransfertDataPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransfertDataPlayerService = TestBed.get(TransfertDataPlayerService);
    expect(service).toBeTruthy();
  });
});
