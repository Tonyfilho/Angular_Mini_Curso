import { ICanComponentLeave } from './../../../_services/guards/unsaved/unsaved-changes.guard';
import { UsersService } from 'src/app/users/servicesUsers/users.service';
import { UserAddClass } from './../../../../assets/userClass/user-class.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { ModalServicesComponent } from 'src/app/_services/modal-services/modal-services.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit, ICanComponentLeave {
  showDisplayModal: string = ''; // var do modalService
  modalMessage:string = ''; // var do modalService
  modalTitle:string = ''; // var do modalService
  
  userFormBuilder!: FormGroup;
  hasError: boolean = false;
  isSubmit: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
   
  ) {}
  

  ngOnInit(): void {
    /**
     * Obs: Caso o validators for mais de 1, tem que por em uma array
     */
    /**
     * para pegarmos os erros podemos usar o CONTROLS ou o GET, no caso do get passamos nó do objeto.
     * console.log(`uCONTROLS company`, this.userFormBuilder.controls['company']);
     * console.log(`get company`, this.userFormBuilder.get('company.bs'))
     */     
        this.userFormBuilder = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      username: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        ],
        suite: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(10),
          ],
        ],
        city: [
          null,
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(30),
          ],
        ],
        zipecode: [
          null,
          [
            Validators.required,
            Validators.minLength(7),
            Validators.maxLength(7),
          ],
        ],
      }),
      company: this.formBuilder.group({
        name: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ],
        ],
        catchphrase: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ],
        ],
        bs: [
          null,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ],
        ],
      }),
    });
    
  }
  /**So precisamos consumir este metodo para q o CanDeactivate funcione */
  canLeave():boolean {
    console.log('dentro do canLeave')
    if(this.userFormBuilder.dirty) {
      return window.confirm(`You have some unsaved changes. Are you sure you want to leave`);
    }
    return true;
  }
  
  sendUserForm() {
    this.userService.postUser(this.userFormBuilder.value).subscribe({
      next: (result) => {
        if (result) {
          this.hasError = false;
          this.isSubmit = true;
          this.modalMessage = 'Formulario Submetido com Sucess';
          this.modalTitle = 'Success';
           this.openPopup();
           this.resetForm();
        }
      },
      error: (err) => {
        this.hasError = true;
        this.isSubmit = false;
        this.modalMessage = err.message;
        this.openPopup();
      },
      complete: () => {},
    });
  }
  resetForm() {
    this.userFormBuilder.reset();
  }
  
  /**
   * Para que o modal service funcione, tem que termos estes 2 metodos de abrir e fechar
   */
  openPopup() {
    this.showDisplayModal = 'block';
  }
  closePopup() {
    this.showDisplayModal = 'none';
  }
}
