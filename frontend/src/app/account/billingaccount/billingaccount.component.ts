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

    private emptyField: boolean;
    private numberCard: string;
    private amountTransfer: number;
    private correctData = true;
    private billingStorage: Subscription = new Subscription();
    private user: Users;
    private mask = [/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ',
        /\d/, /\d/, /\d/, /\d/];
    private error: boolean;


    constructor(private usersService: UserService) {}

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
        if (this.amountTransfer == null || this.numberCard == null) {

            this.emptyField = true;

        } else {

            this.usersService.lookUser.numberCard = this.numberCard;
            this.usersService.lookUser.amountTransfer = this.amountTransfer;
            this.billingStorage.add(this.usersService.transferMoney(this.usersService.lookUser,
                this.usersService.lookUser.id)
                .subscribe((transfer: number) => {

                        console.log(transfer);
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

        this.numberCard = null;
        this.amountTransfer = null;
    }


    ngOnDestroy(): void {
        this.billingStorage.unsubscribe();
    }

}
