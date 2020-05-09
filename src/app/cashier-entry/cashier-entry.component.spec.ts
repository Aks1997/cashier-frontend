import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierEntryComponent } from './cashier-entry.component';

describe('CashierEntryComponent', () => {
  let component: CashierEntryComponent;
  let fixture: ComponentFixture<CashierEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
