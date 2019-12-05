import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject, Subscription} from 'rxjs';
import {Users} from './Users';
import {HttpService} from '../HttpService';
import {Subscriptions} from './Subscriptions';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
    private users: Subject<Users[]>;
    private user: Subject<Users>;
    private subscription: Subject<Subscriptions[]>;

    private subsID: Subject<number>;
    private transfer: Subject<boolean>;

    private userStorage: Subscription = new Subscription();

    // Users (for admin)
    private usersStorage: Users[];

    // ID authorized User (DELETE ???)
    public idUser: number;

    // Authorized user(ID) (DELETE)
    public lookUser: Users;

    // Subscription user(ID)  (DELETE)
    public userSubscription: Subscriptions[];

    // DELETE
    // public id: number;

    private updateUsers = true;
    private updateUserID = true;
    private updateSubscription = true;
    private updateCount = true;

    constructor(private http: HttpService, private httpClient: HttpClient, private router: Router) {
    }

    public getUsers(): Users[] {
        return this.usersStorage;
    }

    public getUser(): Users {
        return this.lookUser;
    }

    // Get all users for admin
    public getUsersHttp(): Observable<Users[]> {
        if (this.updateUsers) {
            this.users = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users').subscribe((users: Users[]) => {
                this.usersStorage = users;
                this.users.next(users);
            });
        }
        this.updateUsers = false;
        return this.users.asObservable();
    }

    // Get user_ID (User Account)
    public getUserHttp(id: number): Observable<Users> {
        this.user = new ReplaySubject(1);
        if (!this.user || this.updateUserID) {
            this.userStorage = this.http.get('http://localhost:8080/api/users/' + id).subscribe((user: Users) => {
                this.lookUser = user;
                this.user.next(user);
            });
        }
        this.updateUserID = false;
        return this.user.asObservable();

    }

    // Get user_ID Subscription (Admin and User)
    public getUserSubscriptionHttp(id: number): Observable<Subscriptions[]> {
        if (!this.subscription || this.updateSubscription || id !== this.idUser) {
            this.subscription = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users/' + id + '/products').subscribe((subscription: Subscriptions[]) => {
                this.userSubscription = subscription;
                this.subscription.next(subscription);
            });
        }
        this.idUser = id;
        this.updateSubscription = false;
        return this.subscription.asObservable();
    }

    // Update date on SC
    public setUpdate(): void {
        this.updateUsers = true;
        this.updateUserID = true;
        this.updateSubscription = true;
        this.updateCount = true;


    }

    public updateUser(): void {
        this.updateUsers = true;
        this.updateUserID = true;
    }

    // Update Subscription
    public updateSubscriptions(): void {
        this.updateSubscription = true;
        this.updateCount = true;
    }

    // Modify information on user_ID (E_wallet, Blocked user)
    public modifyUser(id: number, user: Users): void {
        this.httpClient.put<Users>('http://localhost:8080/api/users/' + id, user).subscribe();
        // this.setUpdate();
    }

    // ON/OFF subscription user_ID
    public addSubscription(name: string, cost: number): void {
        const newSubscription: Subscriptions = new Subscriptions();
        newSubscription.name = name;
        newSubscription.cost = cost;
        this.httpClient.post<Subscriptions>('http://localhost:8080/api/users/products', newSubscription).subscribe();
        this.setUpdate();
    }

    // id = -1 failed authorization
    public authorizationUser(user: Users): Observable<number> {
        this.subsID = new ReplaySubject(1);
        this.httpClient.post<number>('http://localhost:8080/api/users/authorization', user).subscribe(
            (id: number) => {
                this.idUser = id;
                this.subsID.next(id);
            });
        this.setUpdate();
        return this.subsID.asObservable();
    }

    public registerUser(user: Users): Observable<number> {
        this.subsID = new ReplaySubject(1);
        this.httpClient.post<number>('http://localhost:8080/api/users', user).subscribe(
            (id: number) => {
                this.idUser = id;
                this.subsID.next(id);
            });
        this.setUpdate();
        return this.subsID.asObservable();
    }

    // ON/OFF user Subscription_id
    public modifyUserSubscription(subscription: Subscriptions): void {
        console.log(subscription.status);
        this.httpClient.post('http://localhost:8080/api/users/' + this.idUser + '/product', subscription).subscribe();
        // this.setUpdate();
    }

    public transferMoney(user: Users, id: number): Observable<boolean> {
        this.transfer = new ReplaySubject(1);
        console.log(user.numberCard);
        console.log(user.amountTransfer);
        this.httpClient.post<boolean>('http://localhost:8080/api/users/billing/' + id, user).subscribe(
            (transfer: boolean) => {
                this.transfer.next(transfer);
            });
        return this.transfer.asObservable();
    }

    // Pagination
    public countSubscription(id: number): Observable<number> {
        if (this.updateCount) {
            this.subsID = new ReplaySubject(1);
            this.httpClient.get<number>('http://localhost:8080/api/users/' + id + '/products/count').subscribe(
                (count: number) => {
                    this.subsID.next(count);
                });
        }
        this.updateCount = false;
        return this.subsID.asObservable();
    }

    public getUserSubscription(id: number, offset: number, limit: number): Observable<Subscriptions[]> {
        if (!this.subscription || this.updateSubscription || id !== this.idUser) {
            this.subscription = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users/' + id + '/products?offset=' + offset + '&limit=' + limit)
                .subscribe((subscription: Subscriptions[]) => {
                this.userSubscription = subscription;
                this.subscription.next(subscription);
            });
        }
        this.idUser = id;
        this.updateSubscription = false;
        return this.subscription.asObservable();
    }
}
