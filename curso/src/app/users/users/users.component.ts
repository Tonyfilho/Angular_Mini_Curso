import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  localUsers: Array<Object | any> = [];
  localError: string = 'Louding...';
  constructor(private userService: UsersService) {
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