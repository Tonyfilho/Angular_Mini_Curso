import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PipeService {
  users: Array<Object> = [
    {
      id: 100,
      name: 'tony',
      city: 'Setubal',
      salary: 1000,
      age: new Date('01/01/2000'),
    },
    {
      id: 101,
      name: 'Deb',
      city: 'Montijo',
      salary: 2000,
      age: new Date('02/10/2003'),
    },
    {
      id: 102,
      name: 'Brito',
      city: 'Setubal',
      salary: 3000,
      age: new Date('01/08/2007'),
    },
    {
      id: 103,
      name: 'Raquel',
      city: 'Setubal',
      salary: 1000,
      age: new Date('10/10/2000'),
    },
  ];
  constructor(private httpClient: HttpClient) {
  }
  getUsers(): Observable<Object> {
    const localusers = from(this.users);
    return localusers.pipe(delay(1000));
  }

  getUsersApi(){
    const users = this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
    return users;
  }
}
