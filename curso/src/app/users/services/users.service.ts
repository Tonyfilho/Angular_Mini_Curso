import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  constructor(private httpClient: HttpClient) { }
 

  getUsersApi(){
    const users = this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
    return users;
  }
}
