import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogginService } from '../loggin-services/loggin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivateChild {
  isLocalAdmin: boolean = false;
  constructor(private logginService: LogginService){
    this.logginService.serviceUserAdmindRetorno.subscribe(isAdmin => {this.isLocalAdmin = isAdmin })
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    return this.isLocalAdmin;
  }
  
}
