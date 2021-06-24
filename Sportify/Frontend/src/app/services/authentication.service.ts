import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL, AUTHENTICATION, TOKEN} from '../app.constants';
import {stringify} from '@angular/compiler/src/util';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient){}

  helper = new JwtHelperService();
  private userName: any;
  executeAuthentication(username, password) {

    // return this.httpClient.post(`${API_URL}/authenticate`, {this.userName, password}).toPromise().then((data: any) =>
    //  {
    //   // const jwt = JSON.parse(data);
    //   //  let user_data = data.key.jwt;
    //   //  console.log(user_data);
    //   //  console.log(user_data.jwt);
    //   console.log(data);
    //   // console.log(data.json.jwt);
    //   const keysArray = Object.keys(data);
    //   const tokenValue = keysArray[0].valueOf();
    //   const decoded = this.helper.decodeToken(data);
    //   const d = decoded.jwt;
    //   console.log(decoded);
    //   console.log(d);
    //   console.log(tokenValue);


     // console.log('the token is' + data);
     //  });
    // var reqBody = res.request.body.toString();
    // reqBody = JSON.parse(reqBody);
     // return this.httpClient.post(`${API_URL}/authenticate`); }
     console.log('horrraaaaaaaaaaaay');
    //////////////// this.httpClient.post(`${API_URL}/authenticate`, {username, password}).toPromise().then(data => {console.log(data); });
    // .pipe(
    //   map(
    //     response => {
    //       // sessionStorage.setItem(`${AUTHENTICATION}`, username);
    //       // sessionStorage.setItem(`${TOKEN}`, `${response.token}`);
    //       console.log('this is the  token' + `${response.token}`);
    //       return response;
    //     }
    //   )
    // );

  }


    /*let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.httpStudent.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers : header}).pipe(
      map(
        response => {
          sessionStorage.setItem(`${AUTHENTICATION}`,username);
          sessionStorage.setItem(`${TOKEN}`,basicAuthHeaderString);
          return response;
        }
      )
    );*/

  getAuthentication(){
    return sessionStorage.getItem(`${AUTHENTICATION}`);
  }
  getToken(){
    if (this.getAuthentication()){
      return sessionStorage.getItem(`${TOKEN}`);
    }
  }
  isLogin(){
    return !(sessionStorage.getItem(`${AUTHENTICATION}`) == null);
  }

  logOut(){
    sessionStorage.removeItem(`${AUTHENTICATION}`);
    sessionStorage.removeItem(`${TOKEN}`);
  }
}

export class AuthenticationBean{

  constructor(private _message: string) {
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}

