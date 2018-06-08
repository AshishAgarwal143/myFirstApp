import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBasedFormComponent } from './reactive-based-form.component';

describe('ReactiveBasedFormComponent', () => {
  let component: ReactiveBasedFormComponent;
  let fixture: ComponentFixture<ReactiveBasedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveBasedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveBasedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
