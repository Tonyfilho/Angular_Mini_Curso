import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserAddClass } from 'src/assets/userClass/user-class.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private localId = new BehaviorSubject<number>(0);
  serviceId = this.localId.asObservable();

  constructor(private httpClient: HttpClient) {}

  getUsersApi() {
    const users = this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return users;
  }
  getUserById(id: number) {
    const user = this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return user;
  }

  getId(id: number): void {
    //emite um Observable do ID
    this.localId.next(id);
  }

  postUser(user: UserAddClass) {
    return this.httpClient.post(
      `https://httpbin.org/post`,
      JSON.stringify(user)
    ); //JSON é uma API de JSON q o browser vai usar, o stringify é o metodo de conversão de Objeto JS / JSON.
  }
}
