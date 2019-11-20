import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {Subscriptions} from '../../model/Subscriptions';

@Component({
  selector: 'app-management-subscription',
  templateUrl: './management-subscription.component.html',
  styleUrls: ['./management-subscription.component.css']
})
export class ManagementSubscriptionComponent implements OnInit {

  constructor(private data: UserService) {
  }

  @Input() id: number;
  // @Input() subscription: Subscriptions;
  private periodOn = 1;

  ngOnInit() {
    // console.log(this.id);
  }

  // Change products status
  changeStatus(): void {
    let subscription: Subscriptions = new Subscriptions();
    subscription.id = this.data.userSubscription[this.id].id;
    subscription.status = this.data.userSubscription[this.id].status;
    subscription.period = this.data.userSubscription[this.id].period;
    subscription.name = this.data.userSubscription[this.id].name;
    subscription.cost = this.data.userSubscription[this.id].cost;
    subscription = this.data.userSubscription[this.id];
    if (subscription.status === true) {
      this.periodOn = 1;
    }
    subscription.period = this.periodOn;
    subscription.status = !subscription.status;
    this.data.userSubscription[this.id] = subscription;
    this.data.modifyUserSubscription(subscription);
  }

  setPeriodOn(period: number) {
    this.periodOn = period;
  }

  getPeriodOn(): number {
    return this.periodOn;
  }


}
