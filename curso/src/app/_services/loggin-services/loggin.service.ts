import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogginService {
  private userLogged = new BehaviorSubject<boolean>(false);
  serviceLoggedRetorno = this.userLogged.asObservable();
  constructor() { 
    this.isLogged(false);
  }



  isLogged(localLogged: boolean){
    this.userLogged.next(localLogged)
  }
}
