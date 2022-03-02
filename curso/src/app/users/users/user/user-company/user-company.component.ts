import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/servicesUsers/users.service';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
})
export class UserCompanyComponent implements OnInit, AfterViewInit {
  localIdCompany: number = 1;
  localUserCompany: any = new Object();

  constructor(private userService: UsersService) {
    this.userService.serviceId.subscribe((id) => (this.localIdCompany = id));
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.userService
      .getUserById(this.localIdCompany)
      .subscribe({
        next: (data: any) => {this.localUserCompany = data.company},
        error: (err) => console.error(err),
        // complete: () => console.log('completou'),
      });
  }
}
