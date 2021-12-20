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
    subscriptionStorage: Subscription = new Subscription();
    subscriptionsUser: Subscriptions[];
    productPerPage = 10;
    selectedPage = 1;
    page = 1;
    count: number;

    error: boolean;

    constructor(private userService: UserService,
                private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.userService.updateSubscriptions();
        this.subscriptionStorage.add(this.userService.countSubscription(0).subscribe((count: number) => {
                this.count = count;
            },
            err => {
                this.error = true;
            }));
    }

    get products() {
        this.subscriptionStorage.add(this.userService.getUserSubscription(this.id,
            (this.page - 1) * this.productPerPage,
            this.productPerPage, "").subscribe((subscriptions: Subscriptions[]) => {
                this.subscriptionsUser = subscriptions;
            },
            err => {
                this.error = true;
            }));
        return this.subscriptionsUser;
    }

    // Pagination

    get countProducts(): number {
        return this.count;
    }

    // Changing page number
    changePage(newPage: number) {
        this.page = newPage;
        this.selectedPage = this.page;
        this.subscriptionsUser = null;
        this.userService.updateSubscriptions();
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.countProducts / this.productPerPage))
            .fill(0).map((x, i) => i + 1);
    }

    changePageSize(newSize: number) {
        this.productPerPage = Number(newSize);
        this.userService.updateSubscriptions();
    }


    ngOnDestroy(): void {
        this.subscriptionStorage.unsubscribe();
    }
}
