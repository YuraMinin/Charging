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

  /*constructor(id: number, firstName: string, lastName: string, balance: string, blocked: boolean, password: number, numberCard: string,
              userProducts: number[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.blocked = blocked;
    this.password = password;
    this.numberCard = numberCard;
    this.userProducts = userProducts;
  }*/
}

