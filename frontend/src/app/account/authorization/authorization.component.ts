import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../model/user.service';
import {UserSC} from '../../model/UserSC';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private router: Router, private date: UserService) {
  }

  public login: string;
  public passwd: string;
  public emptyField;
  public failedData;
  public user: UserSC;

  // Authorization User or Admin
  auth(): void {
    this.emptyField = false;
    this.failedData = false;

    if (this.login != null && this.passwd != null) {
      // Create User for api
      const user: UserSC = new UserSC();
      user.login = this.login;
      user.password = this.passwd;

      this.date.authorizationUser(user).subscribe((id: number) => {
        if (id === 0) {
          this.router.navigateByUrl('/admin');
        } else if (id === -1) {
          this.failedData = true;
        } else if (id > 0) {
          // console.log(this.date.newUser.firstName);
          // this.date.id = id;
          this.date.setUpdate();
          this.router.navigateByUrl('/account');
        }
      });
    } else {
      this.emptyField = true;
    }
  }

  ngOnInit() {
  }

}
