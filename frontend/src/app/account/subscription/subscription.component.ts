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

  // ???
  private pageNumbers = null;

  constructor(private data: UserService) {
  }

  ngOnInit() {
    /*this.subscriptionStorage.add(this.data.getUserSubscriptionHttp(this.data.idUser).subscribe((subscriptions: SubscriptionSC[]) => {
      this.subscriptions = subscriptions;
    }));*/
  }

  // Get Products with pagination
  get products(): SubscriptionSC[] {

    const pageIndex = (this.selectedPage - 1) * this.productPerPage;
    this.subscriptionStorage.add(this.data.getUserSubscriptionHttp(this.data.idUser).subscribe((subscriptions: SubscriptionSC[]) => {
      this.subscriptions = subscriptions.slice(pageIndex, pageIndex + this.productPerPage);
      this.pageNumbers = Array(Math.ceil(subscriptions.length / this.productPerPage))
        .fill(0).map((x, i) => i + 1);
    }));

    return this.subscriptions;
  }

  // Changing page number
  changePage(newPage: number) {
    this.pageNumbers = Array(Math.ceil(this.subscriptions.length / this.productPerPage))
      .fill(0).map((x, i) => i + 1);
    this.selectedPage = newPage;
  }

  // Changing the number of items on the page
  changePageSize(newSize: number) {
    this.productPerPage = Number(newSize);
  }

  // Calculating page number
  /*pageNumbers(): number[] {
    return Array(Math.ceil(this.subscriptions.length / this.productPerPage))
      .fill(0).map((x, i) => i + 1);
  }*/

  getStatusSubscription(idS: number): string {
    if (this.subscriptions[idS - 1].status === true && this.data.lookUser.blocked === false) {
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
