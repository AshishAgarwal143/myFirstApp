import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ComponentComponent } from './page2-component.component';

describe('Page2ComponentComponent', () => {
  let component: Page2ComponentComponent;
  let fixture: ComponentFixture<Page2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
