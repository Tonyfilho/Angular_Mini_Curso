import { Component, OnInit } from '@angular/core';
import { PipeService } from '../pipe-services/pipe.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  localUsers: Array<object | any> = [];
  constructor(private pipeServices: PipeService) { 
    this.pipeServices.getUsers().subscribe((users:object) => {
      this.localUsers.push(users)
    })
  }

  ngOnInit(): void {
  }

}
