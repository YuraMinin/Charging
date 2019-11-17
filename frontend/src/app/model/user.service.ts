import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject, Subscription} from 'rxjs';
import {UserSC} from './UserSC';
import {HttpService} from '../HttpService';
import {SubscriptionSC} from './SubscriptionSC';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
    private users: Subject<UserSC[]>;
    private user: Subject<UserSC>;
    private subscription: Subject<SubscriptionSC[]>;

    private subsID: Subject<number>;
    private transfer: Subject<boolean>;

    private userStorage: Subscription = new Subscription();

    // Users (for admin)
    private usersStorage: UserSC[];

    // ID authorized User (DELETE ???)
    public idUser: number;

    // Authorized user(ID) (DELETE)
    public lookUser: UserSC;

    // Subscription user(ID)  (DELETE)
    public userSubscription: SubscriptionSC[];

    // DELETE
    // public id: number;

    private updateUsers = true;
    private updateUserID = true;
    private updateSubscription = true;
    private updateCount = true;

    constructor(private http: HttpService, private httpClient: HttpClient, private router: Router) {
    }

    public getUsers(): UserSC[] {
        return this.usersStorage;
    }

    public getUser(): UserSC {
        return this.lookUser;
    }

    // Get all users for admin
    public getUsersHttp(): Observable<UserSC[]> {
        if (this.updateUsers) {
            this.users = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users').subscribe((users: UserSC[]) => {
                this.usersStorage = users;
                this.users.next(users);
            });
        }
        this.updateUsers = false;
        return this.users.asObservable();
    }

    // Get user_ID (User Account)
    public getUserHttp(id: number): Observable<UserSC> {
        this.user = new ReplaySubject(1);
        if (!this.user || this.updateUserID) {
            this.userStorage = this.http.get('http://localhost:8080/api/users/' + id).subscribe((user: UserSC) => {
                this.lookUser = user;
                this.user.next(user);
            });
        }
        this.updateUserID = false;
        return this.user.asObservable();

    }

    // Get user_ID Subscription (Admin and User)
    public getUserSubscriptionHttp(id: number): Observable<SubscriptionSC[]> {
        if (!this.subscription || this.updateSubscription || id !== this.idUser) {
            this.subscription = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users/' + id + '/products').subscribe((subscription: SubscriptionSC[]) => {
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

    // Modify information on user_ID (E_wallet, Blocked user)
    public modifyUser(id: number, user: UserSC): void {
        this.httpClient.put<UserSC>('http://localhost:8080/api/users/' + id, user).subscribe();
        // this.setUpdate();
    }

    // ON/OFF subscription user_ID
    public addSubscription(name: string, cost: number): void {
        const newSubscription: SubscriptionSC = new SubscriptionSC();
        newSubscription.name = name;
        newSubscription.cost = cost;
        this.httpClient.post<SubscriptionSC>('http://localhost:8080/api/users/products', newSubscription).subscribe();
        this.setUpdate();
    }

    // id = -1 failed authorization
    public authorizationUser(user: UserSC): Observable<number> {
        this.subsID = new ReplaySubject(1);
        this.httpClient.post<number>('http://localhost:8080/api/users/authorization', user).subscribe(
            (id: number) => {
                this.idUser = id;
                this.subsID.next(id);
            });
        this.setUpdate();
        return this.subsID.asObservable();
    }

    public registerUser(user: UserSC): Observable<number> {
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
    public modifyUserSubscription(subscription: SubscriptionSC): void {
        console.log(subscription.status);
        this.httpClient.post('http://localhost:8080/api/users/' + this.idUser + '/product', subscription).subscribe();
        // this.setUpdate();
    }

    public transferMoney(user: UserSC, id: number): Observable<boolean> {
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

    public getUserSubscription(id: number, offset: number, limit: number): Observable<SubscriptionSC[]> {
        if (!this.subscription || this.updateSubscription || id !== this.idUser) {
            this.subscription = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users/' + id + '/products/offset=' + offset + '&limit=' + limit)
                .subscribe((subscription: SubscriptionSC[]) => {
                this.userSubscription = subscription;
                this.subscription.next(subscription);
            });
        }
        this.idUser = id;
        this.updateSubscription = false;
        return this.subscription.asObservable();
    }
}
