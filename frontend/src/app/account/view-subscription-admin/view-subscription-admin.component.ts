import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../model/user.service';
import {Subscription} from 'rxjs';
import {Subscriptions} from '../../model/Subscriptions';


@Component({
  selector: 'app-view-subscription-admin',
  templateUrl: './view-subscription-admin.component.html',
  styleUrls: ['./view-subscription-admin.component.css']
})
export class ViewSubscriptionAdminComponent implements OnInit, OnDestroy {

  id: number;
  private subscriptionStorage: Subscription = new Subscription();
  private subscriptionsUser: Subscriptions[];

  constructor(private date: UserService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    setInterval(() => {
      this.date.setUpdate();
    }, 10000);

  }

  Subscriptions() {
    this.subscriptionStorage.add(this.date.getUserSubscriptionHttp(this.id).subscribe((subscriptions: Subscriptions[]) => {
      this.subscriptionsUser = subscriptions;
    }));
    return this.subscriptionsUser;
  }

  ngOnDestroy(): void {
    this.subscriptionStorage.unsubscribe();
  }
}
