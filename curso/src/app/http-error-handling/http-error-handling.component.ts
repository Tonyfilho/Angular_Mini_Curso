import { Component, OnInit } from '@angular/core';
import { HttpErrorService } from './http-error.service';

@Component({
  selector: 'app-http-error-handling',
  templateUrl: './http-error-handling.component.html',
  styles: [],
})
export class HttpErrorHandlingComponent implements OnInit {
  localUser: Array<any> = [];
  localError: string =
    'Erro Provocado com adição de caracterer na URL chamado de: ';
  constructor(private httpComError: HttpErrorService) {}

  ngOnInit(): void {
    this.httpComError.getAllUsers().subscribe({
      next: (item: any) => (this.localUser = item),
      error: (err) => {
        console.error(err, err.name), (this.localError += err.message);
      },
      complete: () => console.log('acabouuuuuuu'),
    });
  }
}
