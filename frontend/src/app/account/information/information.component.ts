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
    userStorage: Subscription = new Subscription();
    user: Users;
    idInterval;
    error: boolean;

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
                console.log(err);
                this.error = true;
            }));

        return this.user;
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        //console.log(!(user === null))
        return (user === null)
    }


    ngOnDestroy(): void {
        this.userStorage.unsubscribe();
        clearInterval(this.idInterval);
    }
}

