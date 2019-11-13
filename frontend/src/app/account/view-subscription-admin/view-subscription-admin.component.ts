import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../model/user.service';
import {Subscription} from 'rxjs';
import {SubscriptionSC} from '../../model/SubscriptionSC';


@Component({
  selector: 'app-view-subscription-admin',
  templateUrl: './view-subscription-admin.component.html',
  styleUrls: ['./view-subscription-admin.component.css']
})
export class ViewSubscriptionAdminComponent implements OnInit, OnDestroy {

  id: number;
  private subscriptionStorage: Subscription = new Subscription();
  private subscriptionsUser: SubscriptionSC[];

  constructor(private date: UserService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscriptionStorage.add(this.date.getUserSubscriptionHttp(this.id).subscribe((subscriptions: SubscriptionSC[]) => {
      this.subscriptionsUser = subscriptions;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptionStorage.unsubscribe();
  }
}
