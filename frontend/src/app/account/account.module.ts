import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubscriptionComponent} from './subscription/subscription.component';
import {InformationComponent} from './information/information.component';
import {ModelModule} from '../model/model.module';
import {AuthorizationComponent} from './authorization/authorization.component';
import {BillingaccountComponent} from './billingaccount/billingaccount.component';
import {AdminComponent} from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {ManagementSubscriptionComponent} from './management-subscription/management-subscription.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { ManagementUsersComponent } from './management-users/management-users.component';
import { ViewSubscriptionAdminComponent } from './view-subscription-admin/view-subscription-admin.component';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { ViewAllSubscriptionsComponent } from './view-all-subscriptions/view-all-subscriptions.component';
import {TextMaskModule} from "angular2-text-mask";
import { ServerErrorComponent } from './server-error/server-error.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ModelModule,
        RouterModule,
        ReactiveFormsModule,
        TextMaskModule
    ],
  declarations: [SubscriptionComponent, InformationComponent, AuthorizationComponent, BillingaccountComponent,
    AdminComponent, ManagementSubscriptionComponent, NavBarComponent, RegisterComponent, ManagementUsersComponent, ViewSubscriptionAdminComponent, AddSubscriptionComponent, ViewAllSubscriptionsComponent, ServerErrorComponent],
  exports: [SubscriptionComponent, InformationComponent, AuthorizationComponent,
    BillingaccountComponent]
})
export class AccountModule {
}
