import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLoggerComponent } from './display-logger.component';

describe('DisplayLoggerComponent', () => {
  let component: DisplayLoggerComponent;
  let fixture: ComponentFixture<DisplayLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
