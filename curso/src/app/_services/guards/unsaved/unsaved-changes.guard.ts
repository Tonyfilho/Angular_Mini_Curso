import { AddUserComponent } from './../../../users/users/add-user/add-user.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


/**
 * Para torna o CanDeactivate como serviço generico, temos q criar uma INTERFACE para ser implentada
 * por todos que precisarem do serviço
 */
 export interface ICanComponentLeave {
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root'
})

export class UnSavedChangesGuard implements CanDeactivate<ICanComponentLeave> {
  /**
   * 
   *implementaremos um serviço que caso algum formulario seja começado a ser preechido
    e o user for trocar de pagina ANTES de enviar o mesmo, aparecerá um modal de aviso 
    para o user confirmar se quer sair da pagina.
    OBS: precisa por o canDeactivate: [UnSavedChangesGuard] lá na rota para funcionar
   */

  canDeactivate(
    component: ICanComponentLeave,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log('Antes do if', component.userFormBuilder.dirty);     
      if (component.canLeave) {
        return component.canLeave();
       // return window.confirm(`You have some unsaved changes. Are you sure you want to leave`) é feito no componente que implementa a interface
      }     
    return true;
  }
  
}
