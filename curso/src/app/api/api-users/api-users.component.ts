import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PipeService } from 'src/app/main/pipe/pipe-services/pipe.service';


@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.css']
})
export class ApiUsersComponent implements OnInit {
  localUser$!: Observable<Object | any>;
  constructor(private pipeService: PipeService) { }

  ngOnInit(): void {
    this.localUser$ = this.pipeService.getUsers();
  }

}
