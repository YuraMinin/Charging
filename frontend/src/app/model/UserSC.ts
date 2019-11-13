import {SubscriptionSC} from './SubscriptionSC';

export class UserSC {
    public id: number;
    public firstName: string;
    public lastName: string;
    public balance: string;
    public blocked: boolean;
    public login: string;
    public password;
    public numberCard = '';
    public amountTransfer: number;
    public userProducts: SubscriptionSC[];

    constructor(firstName: string, lastName: string, login: string, password: string, numberCard: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
        this.numberCard = numberCard;

    }
}

