import { UsersService } from 'src/app/users/servicesUsers/users.service';
import { UserAddClass } from './../../../../assets/userClass/user-class.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userFormBuilder!: FormGroup;
  hasError: boolean = false;
  modalMessage: string = '';
  isSubmit: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

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
      }),
    });
  }

  sendUserForm() {
    // console.log(`userForm`, this.userFormBuilder.value);
    // this.userService
    // .postUser(this.userFormBuilder.value)
    // .pipe(map((responce) => console.log('responce',responce)))
    // .subscribe((result) => console.log('Result',result));
    this.userService.postUser(this.userFormBuilder.value).subscribe({
      next: (result) => {
        if (result) {
          this.hasError = false;
          this.isSubmit = true;
          this.modalMessage = 'Formulario Submetido com Sucess';
          this.resetForm();
        }
      },
      error: (err) => {
        this.hasError = true;
        this.isSubmit = false;
        this.modalMessage = err.message;
      },
      complete: () => {},
    });
  }
  resetForm(){
    this.userFormBuilder.reset();
  }
}
