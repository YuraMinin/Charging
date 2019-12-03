import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Users} from '../../model/Users';
import {UserService} from '../../model/user.service';

@Component({
    selector: 'app-billingaccount',
    templateUrl: './billingaccount.component.html',
    styleUrls: ['./billingaccount.component.css']
})
export class BillingaccountComponent implements OnInit, OnDestroy {

    nameComponent = 'Billing Account';

    public emptyField: boolean;
    public numberCard: string;
    public AmountTransfer: number;
    public correctData = true;
    private billingStorage: Subscription = new Subscription();
    private user: Users;
    private mask = [/[1-9]/, /\d/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, /\d/,' ',
        /\d/, /\d/, /\d/, /\d/];



    constructor(private date: UserService) {
    }

    ngOnInit() {
        this.date.setUpdate();
    }

    get User() {
        this.billingStorage.add(this.date.getUserHttp(this.date.idUser).subscribe((user: Users) => {
            this.user = user;
        }));
        return this.user;
    }

    transferMoney(): void {
        if (this.AmountTransfer == null || this.numberCard == null) {
            this.emptyField = true;
        } else {
            this.date.lookUser.numberCard = this.numberCard;
            this.date.lookUser.amountTransfer = this.AmountTransfer;
            this.billingStorage.add(this.date.transferMoney(this.date.lookUser, this.date.lookUser.id)
                .subscribe((transfer: boolean) => {
                        this.correctData = transfer;
                        this.emptyField = false;
                        this.date.setUpdate();
                    }
                ));
        }
        this.numberCard = null;
        this.AmountTransfer = null;
    }


    ngOnDestroy(): void {
        this.billingStorage.unsubscribe();
    }

}
