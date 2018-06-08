import { TestBed, inject } from '@angular/core/testing';

import { LtaService } from './lta.service';

describe('LtaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LtaService]
    });
  });

  it('should be created', inject([LtaService], (service: LtaService) => {
    expect(service).toBeTruthy();
  }));
});
