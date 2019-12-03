import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {Users} from '../../model/Users';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {

    nameComponent = 'Account';
    private userStorage: Subscription = new Subscription();
    private user: Users;

    constructor(private data: UserService) {

    }

    User() : Users {
        this.userStorage.add(this.data.getUserHttp(this.data.idUser).subscribe((user: Users) => {
            this.user = user;
        }));

        return this.user;
    }

    ngOnInit() {
        setInterval(() => {
            this.data.setUpdate();
        }, 5000);
    }

    ngOnDestroy(): void {
        this.userStorage.unsubscribe();
    }
}

