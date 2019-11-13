import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSubscriptionComponent } from './management-subscription.component';

describe('ManagementSubscriptionComponent', () => {
  let component: ManagementSubscriptionComponent;
  let fixture: ComponentFixture<ManagementSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
