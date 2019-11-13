import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';


@Component({
  selector: 'app-management-users',
  templateUrl: './management-users.component.html',
  styleUrls: ['./management-users.component.css']
})
export class ManagementUsersComponent implements OnInit {

  constructor(private date: UserService) {
  }

  @Input() idUser: number;

  ngOnInit() {}

  InvertUserStatus(): void {
    console.log(this.idUser);
    this.date.getUsers()[this.idUser - 1].blocked = !this.date.getUsers()[this.idUser - 1].blocked;
    this.date.modifyUser(this.idUser, this.date.getUsers()[this.idUser - 1]);
  }

  getClassMap(): string {
    return (this.date.getUsers()[this.idUser - 1].blocked === true ? 'btn btn-outline-success btn-sm' :
      'btn btn-outline-danger btn-sm');

  }

  getNameManagementButton(): string {
    if (this.date.getUsers()[this.idUser - 1].blocked === false) {
      return 'Blocked';
    } else {
      return 'Activate';
    }
  }

}
