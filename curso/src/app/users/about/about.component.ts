import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  CanDeactivate:string = `CanDeactivate Route Guard`;
  constructor() { }

  ngOnInit(): void {
  }

}
