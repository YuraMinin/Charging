import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject, Subscription, throwError} from 'rxjs';
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

    private count: Subject<number>;
    private subsID: Subject<number>;
    private transfer: Subject<number>;

    private userStorage: Subscription = new Subscription();

    // ID authorized User
    public idUser: number;

    private updateUsers = true;
    private updateUserID = true;
    private updateSubscription = true;
    private updateCount = true;
    private updateCountUsers = true;

    constructor(private http: HttpService, private httpClient: HttpClient, private router: Router) {
    }

    /////////////////////////////////////////////////////////
    // Get all users for admin
    public getUsers(offset: number, limit: number): Observable<Users[]> {
        if (this.updateUsers) {
            this.users = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users?offset=' + offset + '&limit=' + limit)
                .subscribe((users: Users[]) => {
                        this.users.next(users);
                    },
                    err => {
                        this.users.error(err);
                    });
        }

        this.updateUsers = false;
        return this.users.asObservable();
    }

    // Get user_ID (User Account)
    public getUser(id: number): Observable<Users> {
        this.user = new ReplaySubject(1);
        if (this.updateUserID) {
            this.userStorage = this.http.get('http://localhost:8080/api/users/' + id)
                .subscribe((user: Users) => {
                        this.user.next(user);
                    },
                    err => {
                        this.user.error(err);
                    });
        }
        this.updateUserID = false;
        return this.user.asObservable();

    }

    public getUserSubscription(id: number, offset: number, limit: number, name: String): Observable<Subscriptions[]> {
        if (this.updateSubscription) {
            this.subscription = new ReplaySubject(1);
            this.http.get('http://localhost:8080/api/users/' + id + '/products?offset=' + offset + '&limit=' + limit +
                '&name=' + name)
                .subscribe((subscription: Subscriptions[]) => {
                        this.subscription.next(subscription);
                    },
                    err => {
                        this.subscription.error(err);
                    })
        }
        //this.idUser = id;
        this.updateSubscription = false;

        return this.subscription.asObservable();
    }

    public countUsers(): Observable<number> {
        if (this.updateCountUsers) {
            this.count = new ReplaySubject(1);
            this.httpClient.get<number>('http://localhost:8080/api/users/count').subscribe(
                (count: number) => {
                    this.count.next(count);
                },
                err => {
                    this.count.error(err);
                });
        }
        this.updateCountUsers = false;
        return this.count.asObservable();
    }

    public countSubscription(id: number): Observable<number> {
        if (this.updateCount) {
            this.subsID = new ReplaySubject(1);
            this.httpClient.get<number>('http://localhost:8080/api/users/' + id + '/products/count').subscribe(
                (count: number) => {
                    this.subsID.next(count);
                },
                err => {
                    this.subscription.error(err);
                });
        }
        this.updateCount = false;
        return this.subsID.asObservable();
    }

    // id = -1 failed authorization
    public authorizationUser(user: Users): Observable<number> {

        this.subsID = new ReplaySubject(1);
        this.httpClient.get<number>('http://localhost:8080/api/users/login/' +  user.login).subscribe(
            (id: number) => {
                this.idUser = id;
                this.subsID.next(id);
            }, err => {
                this.subsID.error(err);
            });

        this.updateUser();
        this.updateSubscriptions();

        return this.subsID.asObservable();
    }

    public registerUser(user: Users): Observable<number> {
        this.subsID = new ReplaySubject(1);
        this.httpClient.post<number>('http://localhost:8080/api/users/up', user).subscribe(
            (id: number) => {
                this.idUser = id;
                this.subsID.next(id);
            },
            err => {
                this.subsID.error(err);
            });

        this.updateUser();
        this.updateSubscriptions();

        return this.subsID.asObservable();
    }

    public transferMoney(user: Users, id: number): Observable<number> {
        this.transfer = new ReplaySubject(1);

        this.httpClient.post<number>('http://localhost:8080/api/users/billing/' + id, user).subscribe(
            (transfer: number) => {
                this.transfer.next(transfer);
            },
            err => {
                this.transfer.error(err);
            });
        return this.transfer.asObservable();
    }

    // Modify information on user_ID (E_wallet, Blocked user)
    public modifyUser(id: number, user: Users): void {
        this.httpClient.put<Users>('http://localhost:8080/api/users/' + id, user).subscribe();
    }


    // ON/OFF user Subscription_id
    public modifyUserSubscription(subscription: Subscriptions): void {
        this.httpClient.post('http://localhost:8080/api/users/' + this.idUser + '/product', subscription)
            .subscribe();
    }

    // ON/OFF subscription user_ID
    public addSubscription(name: string, cost: number): void {
        const newSubscription: Subscriptions = new Subscriptions();
        newSubscription.name = name;
        newSubscription.cost = cost;
        this.httpClient.post<Subscriptions>('http://localhost:8080/api/users/products', newSubscription)
            .subscribe();
        this.updateSubscriptions();
    }


    // Modify information on user_ID (E_wallet, Blocked user)
    public managementAdmin(id: number, status: boolean): void {
        this.httpClient.put('http://localhost:8080/api/users/' + id + '/admins', status).subscribe();
    }


    public updateUser(): void {
        this.updateUsers = true;
        this.updateUserID = true;
        this.updateCountUsers = true;
    }

    // Update Subscription
    public updateSubscriptions(): void {
        this.updateSubscription = true;
        this.updateCount = true;
    }
}
