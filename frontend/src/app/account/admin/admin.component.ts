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
    private usersPerPage = 7;
    private selectedPage = 1;
    private error: boolean = false;

    private idInterval;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.idInterval = setInterval(() => {
            this.userService.updateUser();
            this.error = false;
        }, 10000);
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
