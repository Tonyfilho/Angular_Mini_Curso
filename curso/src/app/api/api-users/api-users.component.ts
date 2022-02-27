import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.css']
})
export class ApiUsersComponent implements OnInit {
  localUser$!: Observable<Object | any>;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.localUser$ = this.apiService.getAllUsers();
  }

}
