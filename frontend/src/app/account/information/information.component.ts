import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../model/user.service';
import {UserSC} from '../../model/UserSC';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {

  nameComponent = 'Account';
  private userStorage: Subscription = new Subscription();
  private user: UserSC;

  constructor(private data: UserService) {
  }

  ngOnInit() {
    this.userStorage.add(this.data.getUserHttp(this.data.idUser).subscribe((user: UserSC) => {
      this.user = user;
    }));
  }

  ngOnDestroy(): void {
    this.userStorage.unsubscribe();
  }
}

