import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {Users} from '../../model/Users';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {

  nameComponent = 'Account';
  private userStorage: Subscription = new Subscription();
  private user: Users;

  constructor(private data: UserService) {
  }

  ngOnInit() {
    this.userStorage.add(this.data.getUserHttp(this.data.idUser).subscribe((user: Users) => {
      this.user = user;
    }));
  }

  ngOnDestroy(): void {
    this.userStorage.unsubscribe();
  }
}

