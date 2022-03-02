import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private localId = new BehaviorSubject<number>(0);
  serviceId = this.localId.asObservable();
 
  constructor(private httpClient: HttpClient) { }
 

  getUsersApi(){
    const users = this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
    return users;
  };
  getUserById(id: number){
    const user = this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return user;
  }

  getId(id: number): void{
   this.localId.next(id);
  }
}
