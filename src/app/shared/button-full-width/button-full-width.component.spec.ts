import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFullWidthComponent } from './button-full-width.component';

describe('ButtonFullWidthComponent', () => {
  let component: ButtonFullWidthComponent;
  let fixture: ComponentFixture<ButtonFullWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFullWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
