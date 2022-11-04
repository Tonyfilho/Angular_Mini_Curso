import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LogginService } from '../../loggin-services/loggin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  logged: boolean = false;
  constructor(private logginService: LogginService, private router: Router) {
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

    if (this.logged) {
      return true;
    }
    this.router.navigate(["/about"]);
    return this.logged;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | UrlTree |
  Observable<boolean | UrlTree> |
   Promise<boolean | UrlTree> {
    return this.canActivate(route, state);
  }
}
