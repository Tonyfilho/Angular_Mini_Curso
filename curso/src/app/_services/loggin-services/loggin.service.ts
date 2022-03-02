import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogginService {
  /**
   * Se está ou não logado
   */
  private userLogged = new BehaviorSubject<boolean>(false);
  serviceLoggedRetorno = this.userLogged.asObservable();
  
  /**
   * Se é ou não administrador
   */
  private userAdmin = new BehaviorSubject<boolean>(false);
  serviceUserAdmindRetorno = this.userAdmin.asObservable();
  constructor() { 
    this.isLogged(true); //passando se estou ou não logado, como se estivesse vindo do backend
    this.isAdmin(false); //passando se é ou não admin, como se estivesse vindo do backend
  }



  isLogged(localLogged: boolean){
    this.userLogged.next(localLogged)
  }
  
  isAdmin(localAdmin: boolean){
    this.userAdmin.next(localAdmin);
  }

}
