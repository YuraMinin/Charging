import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {Subscriptions} from '../../model/Subscriptions';
import {Subscription} from 'rxjs';
import {Users} from '../../model/Users';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit, OnDestroy {

    public productPerPage = 5;
    public selectedPage = 1;
    private subscriptions: Subscriptions[];
    //private user: Users;
    private subscriptionStorage: Subscription = new Subscription();
    private count: number;
    private page = 1;
    private findSubscriptions = "";
    private find = "";

    private idInterval;
    private error: boolean;

    @Input() user: Users;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.idInterval = setInterval(() => {
            this.userService.updateSubscriptions();
        }, 20000);
    }

    // Get Products with pagination
    get products(): Subscriptions[] {

        if (this.find !== this.findSubscriptions) {
            this.userService.updateSubscriptions();
            this.find = this.findSubscriptions;
            this.page = 1;
        }

        this.subscriptionStorage.add(this.userService.getUserSubscription(this.userService.idUser,
            (this.page - 1) * this.productPerPage,
            this.productPerPage, this.findSubscriptions).subscribe((subscriptions: Subscriptions[]) => {
                this.subscriptions = subscriptions;
            },
            err => {
                this.error = true;
            }));


        return this.subscriptions;
    }

    get countProducts(): number {
        this.subscriptionStorage.add(this.userService.countSubscription(this.userService.idUser).subscribe((count: number) => {
                this.count = count;
            },
            err => {
                this.error = true;
            }));
        return this.count;
    }

    // Changing page number
    changePage(newPage: number) {
        this.page = newPage;
        this.selectedPage = this.page;
        this.subscriptions = null;
        this.userService.updateSubscriptions();
    }

    // Changing the number of items on the page
    changePageSize(newSize: number) {
        this.productPerPage = Number(newSize);
        this.userService.updateSubscriptions();
    }

    // Calculating page number
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.countProducts / this.productPerPage))
            .fill(0).map((x, i) => i + 1);
    }

    getStatusSubscription(idS: number): string {
        if (this.subscriptions[idS].status === true && this.user.blocked === false) {
            return 'ON';
        } else if (this.user.blocked === true) {
            return 'Blocked';
        } else {
            return 'OFF';
        }
    }

    getClassMap(): string {
        return (this.user.blocked === true ? 'text-danger' :
            'text-dark');
    }

    ngOnDestroy(): void {
        this.subscriptionStorage.unsubscribe();
        clearInterval(this.idInterval);
    }

}
