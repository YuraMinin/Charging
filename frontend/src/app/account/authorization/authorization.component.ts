import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../model/user.service';
import {Users} from '../../model/Users';
import {AuthService} from "../auth.service";



@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

    login: string;
    passwd: string;
    emptyField;
    failedData;
    error: boolean;
    buttonReturn = false;

    constructor(private router: Router, private userService: UserService, private authService: AuthService) {
    }

    ngOnInit() {

        let user = sessionStorage.getItem('username');
        let id = sessionStorage.getItem('id');
        if (id !== null) {
            this.buttonReturn = true;
            this.userService.idUser = Number(id);
            this.userService.updateSubscriptions();
            this.userService.updateUser();

            if (Number(id)  === 0) {
                this.router.navigateByUrl('/admin');

            }  else if (Number(id) > 0) {

                this.router.navigateByUrl('/account');
            }
        }
    }

    // Authorization User or Admin
    authorization(): void {
        this.emptyField = false;
        this.failedData = false;

        if (this.login != null && this.passwd != null) {

            // Create User for api
            const user: Users = new Users(null, null, this.login, this.passwd,
                null, null);

            this.authService.attemptAuth(this.login, this.passwd).subscribe(
                data => {
                    //this.token.saveToken(data.token);
                    //this.router.navigate(['user']);
                    sessionStorage.setItem('username', this.login);
                    let tokenStr= 'Bearer '+ data.token;
                    sessionStorage.setItem('token', tokenStr);



                    this.userService.authorizationUser(user).subscribe((id: number) => {
                        console.log("id:", id);

                        if (id === 0) {

                            this.userService.updateUser();
                            this.router.navigateByUrl('/admin');
                            document.getElementById("close").click();
                            sessionStorage.setItem('id', id.toString());

                        } else if (id === -1) {

                            this.failedData = true;

                        } else if (id > 0) {


                            this.userService.updateUser();
                            this.userService.updateSubscriptions();
                            this.router.navigateByUrl('/account');
                            document.getElementById("close").click();
                            sessionStorage.setItem('id', id.toString());

                        } else {

                            this.emptyField = true;
                        }


                    });

                },
                err => {
                    console.log(err);
                    //this.error = true;
                    this.failedData = true;

                }

            );


        }
    }

}
