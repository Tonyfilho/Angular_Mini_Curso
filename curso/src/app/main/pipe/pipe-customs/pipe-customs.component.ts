import { Component, OnInit } from '@angular/core';
import { PipeService } from '../pipe_services/pipe.service';

@Component({
  selector: 'app-pipe-customs',
  templateUrl: './pipe-customs.component.html',
  styleUrls: ['./pipe-customs.component.css']
})
export class PipeCustomsComponent implements OnInit {
  localUsers: Array<object> | Array<any> = [];
  constructor(private pipeservice: PipeService) {
    this.pipeservice.getUsers().subscribe((user: object ) => {
      this.localUsers.push(user);     
    })
   }

  ngOnInit(): void {
  }

}
