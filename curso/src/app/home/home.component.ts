import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="main">      
      <h2>Curso de Angular by Tony Filho</h2>
      <div class="image container">
        <img src="/assets/img/angular.png" class="img-fluid" />

      </div>

    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
