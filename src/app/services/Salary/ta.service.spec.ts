import { TestBed, inject } from '@angular/core/testing';

import { TaService } from './ta.service';

describe('TaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaService]
    });
  });

  it('should be created', inject([TaService], (service: TaService) => {
    expect(service).toBeTruthy();
  }));
});
