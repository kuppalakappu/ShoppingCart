import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cart='cart'
  constructor( private router: Router) {}
   logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["login"]);
  }
}
