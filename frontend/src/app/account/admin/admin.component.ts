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
  private count: number;
  private page = 1;
  public usersPerPage = 7;
  public selectedPage = 1;

  constructor(private date: UserService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.date.setUpdate();
    }, 10000);
      this.usersStorage.add(this.date.countUsers().subscribe((count: number) => {
          this.count = count;
      }));
      return this.count;
  }

  Users() {
    this.usersStorage.add(this.date.getUsersHttp((this.page - 1) * this.usersPerPage,
        this.usersPerPage).subscribe((users: Users[]) => {
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

  // Pagination
    // Changing page number
    changePage(newPage: number) {
        this.page = newPage;
        this.selectedPage = this.page;
        this.users = null;
        this.date.updateUser();
    }

    // Changing the number of items on the page
    changePageSize(newSize: number) {
        this.usersPerPage = Number(newSize);
        this.date.updateUser();
    }

    // Calculating page number
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.count / this.usersPerPage))
            .fill(0).map((x, i) => i + 1);
    }


  ngOnDestroy(): void {
    this.usersStorage.unsubscribe();
  }


}
