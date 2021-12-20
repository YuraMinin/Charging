import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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

    emptyField: boolean;
    amountTransfer: number;
    correctData = true;
    billingStorage: Subscription = new Subscription();
    //private user: Users;
    error: boolean;


    constructor(public usersService: UserService) {}

    @Input() user: Users;

    ngOnInit() {
        this.usersService.updateUser();
    }

    get User() {
        this.billingStorage.add(this.usersService.getUser(this.usersService.idUser)
            .subscribe((user: Users) => {
                    this.user = user;
                },
                err => {
                    this.error = true;
                }));
        return this.user;
    }

    transferMoney(): void {
        if (this.amountTransfer == null) {

            this.emptyField = true;

        } else {


            this.user.amountTransfer = this.amountTransfer;
            this.billingStorage.add(this.usersService.transferMoney(this.user,
                this.user.id)
                .subscribe((transfer: number) => {

                        if (transfer === 1) {
                            this.correctData = true;
                        } else {
                            this.correctData = false;
                        }

                        this.emptyField = false;
                        this.usersService.updateUser();

                    },
                    err => {
                        this.error = true;
                    }
                ));
        }

        this.amountTransfer = null;
    }


    ngOnDestroy(): void {
        this.billingStorage.unsubscribe();
    }

}
