import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {

  constructor() { }

  @Input() nameError: string;

  ngOnInit() {
  }

}
