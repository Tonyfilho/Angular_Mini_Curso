import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiUsersService } from '../api-users.service';

@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.css']
})
export class ApiUsersComponent implements OnInit {
  localUser$!: Observable<Object | any>;
  constructor(private apiUserService: ApiUsersService) { }

  ngOnInit(): void {
    this.localUser$ = this.apiUserService.getUsers();
  }

}
