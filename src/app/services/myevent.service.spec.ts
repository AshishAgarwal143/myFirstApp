import { TestBed, inject } from '@angular/core/testing';

import { MyeventService } from './myevent.service';

describe('MyeventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyeventService]
    });
  });

  it('should be created', inject([MyeventService], (service: MyeventService) => {
    expect(service).toBeTruthy();
  }));
});
