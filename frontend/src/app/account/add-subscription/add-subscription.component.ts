import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../model/user.service';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.css']
})
export class AddSubscriptionComponent implements OnInit {

  FormAddSub: FormGroup;

  constructor(private date: UserService) {
    this.FormAddSub = new FormGroup({

        SubscriptionName: new FormControl('', Validators.required),
        SubscriptionCost: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit() {
  }

}
