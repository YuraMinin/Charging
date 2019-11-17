import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {SubscriptionSC} from '../../model/SubscriptionSC';
import {Subscription} from 'rxjs';
import {UserSC} from '../../model/UserSC';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit, OnDestroy {

    public productPerPage = 5;
    public selectedPage = 1;
    private subscriptions: SubscriptionSC[];
    private user: UserSC;
    private subscriptionStorage: Subscription = new Subscription();
    private count: number;
    private page = 1;

    constructor(private data: UserService) {
    }

    ngOnInit() {}

    // Get Products with pagination
    get products(): SubscriptionSC[] {
        this.subscriptionStorage.add(this.data.getUserSubscription(this.data.idUser, (this.page - 1) * this.productPerPage,
            this.productPerPage).subscribe((subscriptions: SubscriptionSC[]) => {
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
        console.log(idS - (this.productPerPage * (this.page - 1) + 1));
        if (this.subscriptions[idS - (this.productPerPage * (this.page - 1) + 1)].status === true && this.data.lookUser.blocked === false) {
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
