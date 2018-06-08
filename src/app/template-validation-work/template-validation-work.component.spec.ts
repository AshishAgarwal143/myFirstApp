import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValidationWorkComponent } from './template-validation-work.component';

describe('TemplateValidationWorkComponent', () => {
  let component: TemplateValidationWorkComponent;
  let fixture: ComponentFixture<TemplateValidationWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateValidationWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateValidationWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
