import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Subscriptions} from "../../model/Subscriptions";
import {UserService} from "../../model/user.service";
import {catchError} from "rxjs/operators";


@Component({
    selector: 'app-view-all-subscriptions',
    templateUrl: './view-all-subscriptions.component.html',
    styleUrls: ['./view-all-subscriptions.component.css']
})
export class ViewAllSubscriptionsComponent implements OnInit, OnDestroy {

    private subscriptionStorage: Subscription = new Subscription();
    private subscriptions: Subscriptions[];
    private productPerPage = 10;
    private selectedPage = 1;
    private page = 1;
    private count: number;
    private error: boolean = false;


    constructor(private date: UserService) {
    }

    ngOnInit() {
        this.subscriptionStorage.add(this.date.countSubscription(0).subscribe((count: number) => {
                this.count = count;
            }, err => {
                this.error = true;
            }
        ));



    }

    get products(): Subscriptions[] {

        this.subscriptionStorage.add(this.date.getUserSubscription(0, (this.page - 1) * this.productPerPage,
            this.productPerPage, "").subscribe((subscriptions: Subscriptions[]) => {
                this.subscriptions = subscriptions;
            },
            err => {
                this.error = true;
            }
        ));
        return this.subscriptions;
    }

    get countProducts(): number {
        return this.count;
    }

    // Changing page number
    changePage(newPage: number) {
        this.page = newPage;
        this.selectedPage = this.page;
        this.subscriptions = null;
        this.date.setUpdate();
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.countProducts / this.productPerPage))
            .fill(0).map((x, i) => i + 1);
    }


    ngOnDestroy(): void {
        this.subscriptionStorage.unsubscribe();
    }

}
