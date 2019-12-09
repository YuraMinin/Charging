import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {Subscriptions} from '../../model/Subscriptions';
import {Users} from "../../model/Users";

@Component({
    selector: 'app-management-subscription',
    templateUrl: './management-subscription.component.html',
    styleUrls: ['./management-subscription.component.css']
})
export class ManagementSubscriptionComponent implements OnInit {

    constructor(private userService: UserService) {}

    @Input() subscription: Subscriptions;
    @Input() user: Users;
    private periodOn = 1;

    ngOnInit() {}

    // Change products status
    changeStatus(): void {
        if (this.subscription.status === true) {
            this.periodOn = 1;
        }
        this.subscription.period = this.periodOn;
        this.subscription.status = !this.subscription.status;
        this.userService.modifyUserSubscription(this.subscription);
    }

    setPeriodOn(period: number) {
        this.periodOn = period;
    }

    getPeriodOn(): number {
        return this.periodOn;
    }


}
