import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {Users} from "../../model/Users";


@Component({
  selector: 'app-management-users',
  templateUrl: './management-users.component.html',
  styleUrls: ['./management-users.component.css']
})
export class ManagementUsersComponent implements OnInit {

  constructor(private data: UserService) {
  }

  @Input() idUser: number;
  @Input() users: Users[];

  ngOnInit() {}

  invertUserStatus(): void {
    this.users[this.idUser].blocked = !this.users[this.idUser].blocked;
    this.data.modifyUser(this.idUser, this.users[this.idUser]);
  }

  getClassButton(): string {
    return (this.users[this.idUser].blocked === true ? 'btn btn-outline-success btn-sm' :
      'btn btn-outline-danger btn-sm');

  }

  getNameManagementButton(): string {
    if (this.users[this.idUser].blocked === false) {
      return 'Blocked';
    } else {
      return 'Activate';
    }
  }

}
