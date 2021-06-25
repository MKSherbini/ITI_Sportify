import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, AUTHENTICATION, TOKEN} from '../app.constants';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  helper = new JwtHelperService();

  executeAuthentication(userName, password) {

    return this.httpClient.post(`${API_URL}/authenticate`, {userName, password}).toPromise().then((data: any) => {
      console.log(data);
      localStorage.setItem('jwt', JSON.stringify(data));
    });
  }

  getAuthentication() {
    return sessionStorage.getItem(`${AUTHENTICATION}`);
  }

  getToken() {
    if (this.getAuthentication()) {
      return sessionStorage.getItem(`${TOKEN}`);
    }
  }

  isLogin() {
    return !(sessionStorage.getItem(`${AUTHENTICATION}`) == null);
  }

  logOut() {
    sessionStorage.removeItem(`${AUTHENTICATION}`);
    sessionStorage.removeItem(`${TOKEN}`);
  }
}


