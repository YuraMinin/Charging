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
  private productPerPage = 10;
  private selectedPage = 1;
  private page = 1;
  private count: number;

  constructor(private date: UserService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscriptionStorage.add(this.date.countSubscription(0).subscribe((count: number) => {
      this.count = count;
    }));
  }

  get products() {
    this.subscriptionStorage.add(this.date.getUserSubscription(this.id, (this.page - 1) * this.productPerPage,
        this.productPerPage).subscribe((subscriptions: Subscriptions[]) => {
      this.subscriptionsUser = subscriptions;
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
    this.date.setUpdate();
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.countProducts / this.productPerPage))
        .fill(0).map((x, i) => i + 1);
  }

  changePageSize(newSize: number) {
    this.productPerPage = Number(newSize);
    this.date.updateSubscriptions();
  }


  ngOnDestroy(): void {
    this.subscriptionStorage.unsubscribe();
  }
}
