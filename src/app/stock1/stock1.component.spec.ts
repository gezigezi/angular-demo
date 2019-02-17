import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stock1Component } from './stock1.component';

describe('Stock1Component', () => {
  let component: Stock1Component;
  let fixture: ComponentFixture<Stock1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stock1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
