import {Subscriptions} from './Subscriptions';

export class Users {
    public id: number;
    public firstName: string;
    public lastName: string;
    public balance: string;
    public blocked: boolean;
    public login: string;
    public email: string;
    public password;
    public numberCard = '';
    public amountTransfer: number;
    public userProducts: Subscriptions[];

    constructor(firstName: string, lastName: string, login: string, password: string, numberCard: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.password = password;
        this.numberCard = numberCard;
        this.email = email;

    }
}

