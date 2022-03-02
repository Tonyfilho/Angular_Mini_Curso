import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LogginService } from '../_services/loggin-services/loggin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {
  localLoggin: boolean = false;
  displayStyle = 'none'; //Var do Modal

  constructor(private logginService: LogginService) {
    this.logginService.serviceLoggedRetorno.subscribe((isLoggin) => {
      (this.localLoggin = isLoggin), console.log(this.localLoggin);
    });
  }

  ngOnInit(): void {}

  openPopUp() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
    this.localLoggin = false;
  }
}
