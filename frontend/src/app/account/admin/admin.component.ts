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
    users: Users[];
    usersStorage: Subscription = new Subscription();
    count: number;
    page = 1;
    usersPerPage = 7;
    selectedPage = 1;
    error: boolean = false;

    idInterval;

    constructor(public userService: UserService) {
    }

    ngOnInit() {
        this.idInterval = setInterval(() => {
            this.userService.updateUser();
            this.error = false;
        }, 5000);
    }

    get Users(): Users[] {
        this.usersStorage.add(this.userService.getUsers((this.page - 1) * this.usersPerPage,
            this.usersPerPage).subscribe((users: Users[]) => {
                this.users = users;
            },
            err => {
                this.error = true;
            }));

        this.usersStorage.add(this.userService.countUsers().subscribe((count: number) => {
                this.count = count;
            },
            err => {
                this.error = true;
            }
        ));

        return this.users;
    }

    userStatus(id: number): string {
        if (!this.users[id].blocked && !this.users[id].admin) {
            return 'Active';
        } else if (this.users[id].blocked && !this.users[id].admin){
            return 'Blocked';
        } else {
            return "Admin"
        }
    }

    getClassMap(id: number): string {

        if (this.userStatus(id) === 'Active' && !this.users[id].admin) {
            return 'text-success font-weight-bold';
        } else if (this.userStatus(id) !== 'Active' && !this.users[id].admin){
            return 'text-danger font-weight-bold';
        } else {
            return "text-primary font-weight-bold"
        }

    }

    // Pagination
    // Changing page number
    changePage(newPage: number) {
        this.page = newPage;
        this.selectedPage = this.page;
        this.users = null;
        this.userService.updateUser();
    }

    // Changing the number of items on the page
    changePageSize(newSize: number) {
        this.usersPerPage = Number(newSize);
        this.userService.updateUser();
    }

    // Calculating page number
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.count / this.usersPerPage))
            .fill(0).map((x, i) => i + 1);
    }

    managementUser(id: number): void {
        this.userService.managementAdmin(this.users[id].id, !this.users[id].admin);
    }

    ngOnDestroy(): void {
        this.usersStorage.unsubscribe();
        clearInterval(this.idInterval);
    }


}
