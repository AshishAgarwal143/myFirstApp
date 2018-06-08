import { TestBed, inject } from '@angular/core/testing';

import { PerimeterService } from './perimeter.service';

describe('PerimeterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerimeterService]
    });
  });

  it('should be created', inject([PerimeterService], (service: PerimeterService) => {
    expect(service).toBeTruthy();
  }));
});
