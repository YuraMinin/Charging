import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingaccountComponent } from './billingaccount.component';

describe('BillingaccountComponent', () => {
  let component: BillingaccountComponent;
  let fixture: ComponentFixture<BillingaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
