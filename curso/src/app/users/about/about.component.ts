import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  service: string =`Temos, Varios Serviços, de GUARDS, LOGGIN_SERVICE, MODEL_SERVICE stay in: _service/.`;
  authGuard:string=`Temos, CanActivate stay in: _service/guards/auth/auth, que permite somente Usurios LOGADOS a poder ter acesso a rota USERS, 
  USER.` ;
  authAdminGuard:string = `Temos CanActivateChild, CanActivate stay in: _service/guards/auth/admin que permite somente quem for ADMIN 
  entrar nestas ROTAS Ex: AddUser button, é abilidado somente para ADMIM, Rotas users/users/user-address e user-company só são acessadas por ADMIM.`;
  unSaved: string = `CanDeactivate Route Guard, stay in: _service/guards/unsaved, quem implementa a 
  INTEFACE tem sobre escrever o metodo e usar canDeactivate: [UnSavedChangesGuard] na rota.`;
  constructor() {}

  ngOnInit(): void {}
}
