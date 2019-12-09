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
    private idInterval;
    private error: boolean;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.idInterval = setInterval(() => {
            this.userService.updateUser();
            this.error = false;
        }, 5000);
    }

    get User(): Users {
        this.userStorage.add(this.userService.getUser(this.userService.idUser).subscribe((user: Users) => {
                this.user = user;
            },
            err => {
                this.error = true;
            }));

        return this.user;
    }


    ngOnDestroy(): void {
        this.userStorage.unsubscribe();
        clearInterval(this.idInterval);
    }
}

