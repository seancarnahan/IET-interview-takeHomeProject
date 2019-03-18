import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJsonComponent } from './display-json.component';

describe('DisplayJsonComponent', () => {
  let component: DisplayJsonComponent;
  let fixture: ComponentFixture<DisplayJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
