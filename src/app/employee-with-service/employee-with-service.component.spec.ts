import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWithServiceComponent } from './employee-with-service.component';

describe('EmployeeWithServiceComponent', () => {
  let component: EmployeeWithServiceComponent;
  let fixture: ComponentFixture<EmployeeWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
