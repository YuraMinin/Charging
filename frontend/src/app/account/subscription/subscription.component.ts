import {Component, OnDestroy, OnInit} from '@angular/core';
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
    private user: Users;
    private subscriptionStorage: Subscription = new Subscription();
    private count: number;
    private page = 1;

    constructor(private data: UserService) {
    }

    ngOnInit() {
        setInterval(() => {
            this.data.updateSubscriptions();
        }, 30000);
    }

    // Get Products with pagination
    get products(): Subscriptions[] {
        this.subscriptionStorage.add(this.data.getUserSubscription(this.data.idUser, (this.page - 1) * this.productPerPage,
            this.productPerPage).subscribe((subscriptions: Subscriptions[]) => {
            this.subscriptions = subscriptions;
        }));
        return this.subscriptions;
    }

    get countProducts(): number {
        this.subscriptionStorage.add(this.data.countSubscription(this.data.idUser).subscribe((count: number) => {
            this.count = count;
        }));
        return this.count;
    }

    // Changing page number
    changePage(newPage: number) {
        this.page = newPage;
        this.selectedPage = this.page;
        this.subscriptions = null;
        this.data.setUpdate();
    }

    // Changing the number of items on the page
    changePageSize(newSize: number) {
        this.productPerPage = Number(newSize);
        this.data.setUpdate();
    }

    // Calculating page number
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.countProducts / this.productPerPage))
            .fill(0).map((x, i) => i + 1);
    }

    getStatusSubscription(idS: number): string {
        if (this.subscriptions[idS].status === true && this.data.lookUser.blocked === false) {
            return 'ON';
        } else if (this.data.lookUser.blocked === true) {
            return 'Blocked';
        } else {
            return 'OFF';
        }
    }

    getClassMap(): string {
        return (this.data.lookUser.blocked === true ? 'text-danger' :
            'text-dark');
    }

    ngOnDestroy(): void {
        this.subscriptionStorage.unsubscribe();
    }

}
