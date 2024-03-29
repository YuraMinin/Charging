import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../model/user.service';
import {Users} from '../../model/Users';
import {$} from 'protractor';
import {AuthService} from "../auth.service";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    firstName: string;
    lastName: string;
    numberCard: string;
    newLogin: string;
    newEmail: string;
    newPassword: string;
    canRegister: boolean;
    failedLogin = false;
    mask = [/[1-9]/, /\d/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, /\d/,' ',
        /\d/, /\d/, /\d/, /\d/];
    myForm: FormGroup;

    private error: boolean;


    constructor(private router: Router, private userService: UserService, private authService: AuthService) {
        this.myForm = new FormGroup({

                firstName: new FormControl('', Validators.required),
                lastName: new FormControl('', Validators.required),
                userEmail: new FormControl('', [
                    Validators.required,
                    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
                ]),
                numCard: new FormControl('', [
                    Validators.required,
                    Validators.pattern('[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}')
                ]),
                userLogin: new FormControl('', Validators.required),
                userPassword: new FormControl('', Validators.required),
                reUserPassword: new FormControl('', Validators.required),
            }
        );
    }

    ngOnInit() {}

    passwordOK(pass1: any, pass2: any): boolean {
        if (pass1 === pass2) {
            this.canRegister = true;
            return false;
        } else {
            this.canRegister = false;
            return true;
        }
    }

    Register(fName: any, lName: any, Login: any, passw: any, numCard: any, email: any): void {
        this.firstName = String(fName);
        this.lastName = String(lName);
        this.newLogin = String(Login);
        this.newPassword = String(passw);
        this.numberCard = String(numCard);
        this.newEmail = String(email);
        const newUser: Users = new Users(this.firstName, this.lastName, this.newLogin, this.newPassword, this.numberCard,
            this.newEmail);

        this.userService.registerUser(newUser).subscribe((id: number) => {
            if (id === -1) {
                this.failedLogin = true;
            } else if (id > 0) {


                this.authService.attemptAuth(this.newLogin, this.newPassword).subscribe(
                    data => {
                        //this.token.saveToken(data.token);
                        //this.router.navigate(['user']);
                        sessionStorage.setItem('username', this.newLogin);
                        let tokenStr= 'Bearer '+ data.token;
                        sessionStorage.setItem('token', tokenStr);


                        this.userService.updateSubscriptions();
                        this.userService.updateUser();
                        this.router.navigateByUrl('/account');

                    },
                    err => {
                        console.log(err);
                        this.failedLogin = true;

                    }

                );


                document.getElementById("closeRegister").click();
                sessionStorage.setItem('id', id.toString());
            }
        },
            err => {
                this.error = true;
            });
    }

    getClassMap(): string {
        return (this.myForm.valid && this.canRegister ? 'btn btn-success' :
            'btn btn-secondary');
    }

    onSubmit() {
        // console.log(this.myForm);
    }
}
