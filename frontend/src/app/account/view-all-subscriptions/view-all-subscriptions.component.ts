import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Subscriptions} from "../../model/Subscriptions";
import {UserService} from "../../model/user.service";


@Component({
  selector: 'app-view-all-subscriptions',
  templateUrl: './view-all-subscriptions.component.html',
  styleUrls: ['./view-all-subscriptions.component.css']
})
export class ViewAllSubscriptionsComponent implements OnInit {

  private subscriptionStorage: Subscription = new Subscription();
  private subscriptionsUser: Subscriptions[];
  constructor(private date: UserService) { }

  ngOnInit() {
    setInterval(() => {
      this.date.setUpdate();
    }, 10000);
  }

  Subscriptions() {
    this.subscriptionStorage.add(this.date.getUserSubscriptionHttp(0).subscribe(
        (subscriptions: Subscriptions[]) => {
      this.subscriptionsUser = subscriptions;
    }));
    return this.subscriptionsUser;
  }

}
