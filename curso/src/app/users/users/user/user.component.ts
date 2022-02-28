import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  localUser: Object | any = {};
  localError: string = '';
  /**
   * Pegando o ID da rota, com ActivatedRoute
   */
  constructor(
    private route: ActivatedRoute,
    private userServices: UsersService
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']); //pegando o paramentro
    const id = this.route.snapshot.params['id'];
    this.userServices
      .getUserById(id)
      .subscribe({
        next: (user: any) => (this.localUser = user),
        error: (err) => (this.localError = err.message),
        complete: () => {console.log('subscrition complete')},
      });
    
  }
}
