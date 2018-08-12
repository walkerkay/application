import { Component } from '@angular/core';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public router: Router
  ) {
  }

}
