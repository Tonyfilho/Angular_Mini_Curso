import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/server.service';

@Component({
  selector: 'app-api-real',
  templateUrl: './api-real.component.html',
  styleUrls: ['./api-real.component.css']
})
export class ApiRealComponent implements OnInit {
  localUsers:Array<object> | Array<any> = [];
  constructor(private apiRealService: ApiService) { }

  ngOnInit(): void {
    this.apiRealService.getAll().subscribe((user: any) => {
     user.map((userFiltrado: any) => this.localUsers.push(userFiltrado) )
      
      ;
      console.log(this.localUsers);
    })
  }

}
