import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogginService } from 'src/app/_services/loggin-services/loggin.service';
import { UsersService } from '../servicesUsers/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  
})
export class UsersComponent implements OnInit {
  localUsers: Array<Object | any> = [];
  localError: string = 'Louding...';
  localIsAdmin: boolean = false;
  constructor(private userService: UsersService, private logginService: LogginService) {
    this.logginService.serviceUserAdmindRetorno.subscribe(isAdmin => this.localIsAdmin = isAdmin)
    this.userService
      .getUsersApi()
      .subscribe({
        next: ((next: any) => { this.localUsers = next}),
        error: (err: Error) => (this.localError = err.message),
        complete: () => console.log('response complete'),
      });
  }

  ngOnInit(): void {}
}
