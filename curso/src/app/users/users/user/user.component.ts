import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogginService } from 'src/app/_services/loggin-services/loggin.service';
import { UsersService } from '../../servicesUsers/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  
})
export class UserComponent implements OnInit {
  localUser: Object | any = {};
  localIdUser!: number;
  localIsError: boolean= false;
  localIsAdmin: boolean = false;
  isModalWorking: boolean = false // var q ativa o modal, seja error, ou confirmações
  displayStyle: string = ''; //Var do Modal
  modalMessage: string = ''; // var q mostra a mensagem do modal
  /**
   * Pegando o ID da rota, com ActivatedRoute
   */
  constructor(
    private route: ActivatedRoute,
    private userServices: UsersService,
    private logginServices: LogginService
  ) {
    this.logginServices.serviceUserAdmindRetorno.subscribe(isAdmin => this.localIsAdmin = isAdmin)
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']); //pegando o paramentro
    this.localIdUser = this.route.snapshot.params['id'];
    this.userServices.getId(this.localIdUser);// compatilhando o ID para outros compomente, user-company e user-address 
    this.userServices
      .getUserById(this.localIdUser)
      .subscribe({
        next: (user: any) => (this.localUser = user),
        error: (err) => { this.isModalWorking = true, this.localIsError = true, this.modalMessage =  err.message, this.openPopup()},
        complete: () => {console.log('subscrition complete')},
      });
    
  }
  
  openPopup(){
    console.log(this.localIsAdmin, this.isModalWorking);
    this.localIsAdmin ? (this.modalMessage = '', this.isModalWorking = false): this.modalMessage = 'Just Admin Allow', this.isModalWorking = true;
    this.displayStyle = 'block';
  }
  closePopup(){
    this.modalMessage = '', this.isModalWorking = false;
    this.displayStyle = 'none';
  }
}
