import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisetestComponent } from './promisetest.component';

describe('PromisetestComponent', () => {
  let component: PromisetestComponent;
  let fixture: ComponentFixture<PromisetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
