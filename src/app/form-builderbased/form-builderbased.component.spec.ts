import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderbasedComponent } from './form-builderbased.component';

describe('FormBuilderbasedComponent', () => {
  let component: FormBuilderbasedComponent;
  let fixture: ComponentFixture<FormBuilderbasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderbasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderbasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
