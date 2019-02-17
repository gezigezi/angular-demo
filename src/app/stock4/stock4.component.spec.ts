import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stock4Component } from './stock4.component';

describe('Stock4Component', () => {
  let component: Stock4Component;
  let fixture: ComponentFixture<Stock4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stock4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stock4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
