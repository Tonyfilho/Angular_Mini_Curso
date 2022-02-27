import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PipeService } from '../pipe-services/pipe.service';

@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.css']
})
export class PipeAsyncComponent implements OnInit {
  localUser$: Observable<Object | any> ;
  constructor(private pipeService: PipeService) {
    this.localUser$ = this.pipeService.getUsersApi();

   }

  ngOnInit(): void {
  }

}
