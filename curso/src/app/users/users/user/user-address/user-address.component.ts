import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users/servicesUsers/users.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
})
export class UserAddressComponent implements OnInit, AfterViewInit {
  localUserAddress: any = {};
  localIdAddress: number = 1;
  localError: string = 'Louding ...';
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.userService.serviceId.subscribe((id) => {
      this.localIdAddress = id;//pegando Id pelo Serviço Any to Any
    }); 
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.userService.getUserById(this.localIdAddress).subscribe({
      next: (userAddress: any) => {
        this.localUserAddress = userAddress.address;
      },
      error: (err: any) => console.error(err),
      complete: () => console.log('completouuuuu'),
    });
  }
}
