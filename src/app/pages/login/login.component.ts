import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}
  login() {
    const credentials = { username: this.username, password: this.password };
    this.loginService.login(credentials).subscribe(
      (response: any) => {
        this.invalidLogin = false;
        localStorage.setItem('jwt', response.token);
        this.router.navigate(['dashboard']);
      },
      (err) => {
        this.invalidLogin = true;
      }
    );
  }
  cancel() {}
}
