import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { jwtDecode} from 'jwt-decode'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;
  res:any
  constructor(private loginService: LoginService, private router: Router) {}
  login() {
    const credentials = { username: this.username, password: this.password };
    this.loginService.login(credentials).subscribe(
      (response: any) => {
        this.invalidLogin = false;
        localStorage.setItem('jwt', response.token);
        const t:string=jwtDecode(response.token)
        localStorage.setItem('userId',JSON.stringify(t))
        this.router.navigate(['dashboard']);
      },
      (err) => {
        this.invalidLogin = true;
      }


    );
    
  }

  logout()

  {
    let credentials=null;

     this.loginService.logout(credentials).subscribe((response:any)=>{ this.res=response})
  }
  cancel() {}
}
