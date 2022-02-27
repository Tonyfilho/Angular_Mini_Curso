import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  localCaracterDeError: string = 'padjkdshf';
  constructor(private http: HttpClient) {}
 
  getAllUsers() {
    /**Foi provocado o erro na Url adcionando o final 2 */
    const users = this.http.get(`https://jsonplaceholder.typicode.com/users${this.localCaracterDeError}`);

    return users;
  }
}
