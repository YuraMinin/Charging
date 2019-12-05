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

    constructor(private router: Router, private date: UserService) {
    }

    private login: string;
    private passwd: string;
    private emptyField;
    public failedData;
    public user: Users;



    // Authorization User or Admin
    auth(): void {
        this.emptyField = false;
        this.failedData = false;

        if (this.login != null && this.passwd != null) {
            // Create User for api
            const user: Users = new Users(null, null, this.login, this.passwd, null, null);

            this.date.authorizationUser(user).subscribe((id: number) => {
                if (id === 0) {
                    this.router.navigateByUrl('/admin');
                    document.getElementById("close").click();
                } else if (id === -1) {
                    this.failedData = true;
                } else if (id > 0) {
                    this.date.setUpdate();
                    this.router.navigateByUrl('/account');
                    document.getElementById("close").click();
                }
            });
        } else {
            this.emptyField = true;
        }
    }

    ngOnInit() {
    }

}
