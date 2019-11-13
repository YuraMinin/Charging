import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubscriptionAdminComponent } from './view-subscription-admin.component';

describe('ViewSubscriptionAdminComponent', () => {
  let component: ViewSubscriptionAdminComponent;
  let fixture: ComponentFixture<ViewSubscriptionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubscriptionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubscriptionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
