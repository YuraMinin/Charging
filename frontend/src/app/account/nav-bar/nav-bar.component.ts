import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  @Input() nameNavBar: string;
  ngOnInit() {
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
  }
}
