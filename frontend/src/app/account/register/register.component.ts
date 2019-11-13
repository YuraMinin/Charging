import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../model/user.service';
import {UserSC} from '../../model/UserSC';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public firstName: string;
    public lastName: string;
    public numberCard: string;
    public newLogin: string;
    public newPassword: string;
    public canRegister: boolean;
    public failedLogin = false;
    myForm: FormGroup;

    constructor(private router: Router, private date: UserService) {
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

    ngOnInit() {
    }

    private passwordOK(pass1: any, pass2: any): boolean {
        if (pass1 === pass2) {
            this.canRegister = true;
            return false;
        } else {
            this.canRegister = false;
            return true;
        }
    }

    Register(fName: any, lName: any, Login: any, passw: any, numCard: any): void {
        this.firstName = String(fName);
        this.lastName = String(lName);
        this.newLogin = String(Login);
        this.newPassword = String(passw);
        this.numberCard = String(numCard);
        const newUser: UserSC = new UserSC(this.firstName, this.lastName, this.newLogin, this.newPassword, this.numberCard);
        this.date.registerUser(newUser).subscribe((id: number) => {
            if (id === -1) {
                this.failedLogin = true;
            } else if (id > 0) {
                this.date.setUpdate();
                this.router.navigateByUrl('/account');
            }
        });
    }

    getClassMap(): string {
        return (this.myForm.valid && this.canRegister ? 'btn btn-success' :
            'btn btn-secondary');
    }

    onSubmit() {
        console.log(this.myForm);
    }
}
