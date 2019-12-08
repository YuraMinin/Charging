import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../model/user.service';
import {Users} from '../../model/Users';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

    private login: string;
    private passwd: string;
    private emptyField;
    private failedData;
    private error: boolean;

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {}

    // Authorization User or Admin
    authorization(): void {
        this.emptyField = false;
        this.failedData = false;

        if (this.login != null && this.passwd != null) {

            // Create User for api
            const user: Users = new Users(null, null, this.login, this.passwd,
                null, null);

            this.userService.authorizationUser(user).subscribe((id: number) => {
                    if (id === 0) {

                        this.router.navigateByUrl('/admin');
                        document.getElementById("close").click();

                    } else if (id === -1) {

                        this.failedData = true;

                    } else if (id > 0) {

                        this.userService.updateUser();
                        this.userService.updateSubscriptions();
                        this.router.navigateByUrl('/account');
                        document.getElementById("close").click();

                    } else {

                        this.emptyField = true;
                    }
                },

                err => {
                    this.error = true;
                });
        }
    }

}
