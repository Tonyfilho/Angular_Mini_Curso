import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LogginService } from '../loggin-services/loggin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  logged: boolean = false;
  constructor(private logginService: LogginService) {
    this.logginService.serviceLoggedRetorno.subscribe(isLoggin => this.logged = isLoggin)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    
    return this.logged;
  }
}
