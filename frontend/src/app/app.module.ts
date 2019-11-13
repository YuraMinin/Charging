import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AccountModule} from './account/account.module';
import {AuthorizationComponent} from './account/authorization/authorization.component';
import {AdminComponent} from './account/admin/admin.component';
import {BillingaccountComponent} from './account/billingaccount/billingaccount.component';
import {SubscriptionComponent} from './account/subscription/subscription.component';
import {InformationComponent} from './account/information/information.component';
import {RouterModule} from '@angular/router';
import {ViewSubscriptionAdminComponent} from './account/view-subscription-admin/view-subscription-admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChargingFirstGuard} from './chargingFirst.guard';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './HttpService';

@NgModule({
  imports: [
    BrowserModule,
    AccountModule,
    RouterModule.forRoot([
      {
        path: 'account', component: InformationComponent,
        canActivate: [ChargingFirstGuard]
      },
      {
        path: 'billingaccount', component: BillingaccountComponent,
        canActivate: [ChargingFirstGuard]
      },
      {path: 'admin', component: AdminComponent, canActivate: [ChargingFirstGuard]},
      {path: 'authorization', component: AuthorizationComponent, canActivate: [ChargingFirstGuard]},
      {path: 'products/:id', component: ViewSubscriptionAdminComponent, canActivate: [ChargingFirstGuard]},
      {path: '**', redirectTo: '/authorization', canActivate: [ChargingFirstGuard]}
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [ChargingFirstGuard, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
