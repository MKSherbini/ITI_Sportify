import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logged:boolean=false;
  authenticateUrl:string=environment.AuthenticateUrl;
  jwttoken:string;
  constructor(private _http:HttpClient) { }

  login(obj:Login){
     return this._http.post(this.authenticateUrl,obj);
  }
  addToken(jwttoken:string){
    localStorage.setItem('token', jwttoken);
  }
  removeToken(jwttoken:string){
    localStorage.removeItem('token');
  }

}
