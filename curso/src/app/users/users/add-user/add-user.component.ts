import { UserAddClass } from './../../../../assets/userClass/user-class.component';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  userAdd: UserAddClass = {    
    name: '',
    phone: '',
    email: '',
    username: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  };
  userFormControl:FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}
}
