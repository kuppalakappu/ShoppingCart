import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(credentials: any) {
    return this.http.post('https://fakestoreapi.com/auth/login', credentials);
  }
  isLoggedIn() {
    const token = localStorage.getItem('jwt');
    if (!token) return false;
    const payload = atob(token.split('.')[1]);
    const parsedPayload = JSON.parse(payload);
    const isValid = parsedPayload.iat+(24 * 60 * 60 * 1000) > Date.now() / 1000; // added 24 hrs to issuing time & check if token is expired
    return isValid;

  }
 logout(credentials:any)
 {
  return this.http.get("url",credentials)
 }

}

