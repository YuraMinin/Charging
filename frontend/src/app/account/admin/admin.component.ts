import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {UserSC} from '../../model/UserSC';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  nameComponent = 'Admin Account';
  private users: UserSC[];
  private usersStorage: Subscription = new Subscription();

  constructor(private date: UserService) {
  }

  ngOnInit() {
    this.usersStorage.add(this.date.getUsersHttp().subscribe((users: UserSC[]) => {
      this.users = users;
    }));
  }

  userStatus(id: number): string {
    if (this.users[id - 1].blocked === false) {
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
