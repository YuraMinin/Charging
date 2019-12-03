import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {Users} from '../../model/Users';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  nameComponent = 'Admin Account';
  private users: Users[];
  private usersStorage: Subscription = new Subscription();

  constructor(private date: UserService) {
  }

  ngOnInit() {
    /*this.usersStorage.add(this.date.getUsersHttp().subscribe((users: Users[]) => {
      this.users = users;
    }));*/
    setInterval(() => {
      this.date.setUpdate();
    }, 10000);
  }

  Users() {
    this.usersStorage.add(this.date.getUsersHttp().subscribe((users: Users[]) => {
      this.users = users;
    }));
    return this.users;
  }

  userStatus(id: number): string {
    if (this.users[id].blocked === false) {
      return 'Active';
    } else {
      return 'Blocked';
    }
  }

  getClassMap(id: number): string {
    return (this.userStatus(id) === 'Active' ? 'text-success' :
      'text-danger');

  }

  ngOnDestroy(): void {
    this.usersStorage.unsubscribe();
  }


}
