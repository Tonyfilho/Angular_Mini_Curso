import { UserAddClass } from './../../../../assets/userClass/user-class.component';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, 
  FormGroup,
  Validators,
} from '@angular/forms';

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

  userFormBuilder!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userFormBuilder = this.formBuilder.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      address: this.formBuilder.group({
        street: [null, Validators.required],
        suite: [null, Validators.required],
        city: [null, Validators.required],
        zipecode: [null, Validators.required],
      }),
      company: this.formBuilder.group({
        name: [null, Validators.required],
        catchphrase: [null, Validators.required],
        bs: [null, Validators.required],
      },)
    });
  }

  sendUserForm() {
    console.log(`userForm`, this.userFormBuilder.value);
  }
}
