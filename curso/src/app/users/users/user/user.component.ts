import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  
})
export class UserComponent implements OnInit {
  localUser: Object | any = {};
  localError: string = '';
  localIdUser!: number;
  /**
   * Pegando o ID da rota, com ActivatedRoute
   */
  constructor(
    private route: ActivatedRoute,
    private userServices: UsersService
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']); //pegando o paramentro
    this.localIdUser = this.route.snapshot.params['id'];
    this.userServices.getId(this.localIdUser);// compatilhando o ID para outro compomente
    this.userServices
      .getUserById(this.localIdUser)
      .subscribe({
        next: (user: any) => (this.localUser = user),
        error: (err) => (this.localError = err.message),
        complete: () => {console.log('subscrition complete')},
      });
    
  }
}
