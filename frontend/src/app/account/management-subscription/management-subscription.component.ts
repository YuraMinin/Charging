import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {subscribeOn} from 'rxjs/operators';
import {SubscriptionSC} from '../../model/SubscriptionSC';

@Component({
  selector: 'app-management-subscription',
  templateUrl: './management-subscription.component.html',
  styleUrls: ['./management-subscription.component.css']
})
export class ManagementSubscriptionComponent implements OnInit {

  constructor(private data: UserService) {
  }

  @Input() id: number;
  private periodOn = 1;

  ngOnInit() {
    // console.log(this.id);
  }

  // Change products status
  changeStatus(): void {
    /*if (this.data.getUser().getProducts()[this.id - 1].StatusSubscriptionBool === true) {
      this.periodOn = 0;
    }
    this.data.getUser().getProducts()[this.id - 1].Period = this.periodOn;
    this.data.getUser().setStatus(this.id);
    this.periodOn = 1;*/
    let subscription: SubscriptionSC = new SubscriptionSC()
    subscription.id = this.data.userSubscription[this.id - 1].id;
    subscription.status = this.data.userSubscription[this.id - 1].status;
    subscription.period = this.data.userSubscription[this.id - 1].period;
    subscription.name = this.data.userSubscription[this.id - 1].name;
    subscription.cost = this.data.userSubscription[this.id - 1].cost;
    subscription = this.data.userSubscription[this.id - 1];
    if (subscription.status === true) {
      this.periodOn = 0;
    }
    subscription.period = this.periodOn;
    subscription.status = !subscription.status;
    // this.data.userSubscription = null;
    this.data.userSubscription[this.id - 1] = subscription;
    this.data.modifyUserSubscription(subscription);
    // console.log('id: ', this.id, ' status: ', subscription.status);
  }

  setPeriodOn(period: number) {
    this.periodOn = period;
  }

  getPeriodOn(): number {
    return this.periodOn;
  }


}
