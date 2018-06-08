import { TestBed, inject } from '@angular/core/testing';

import { HraService } from './hra.service';

describe('HraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HraService]
    });
  });

  it('should be created', inject([HraService], (service: HraService) => {
    expect(service).toBeTruthy();
  }));
});
