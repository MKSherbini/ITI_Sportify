import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login';
import { LoginUser } from '../models/LoginUser';
import { AuthenticatingEndPointService } from '../userOpenApi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<LoginUser>;

  private userStorageKey: string = 'sb';
  private tokenStorageKey: string = 'st';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  }

  constructor(private http: HttpClient, private authController: AuthenticatingEndPointService) {
    this.currentUserSubject = new BehaviorSubject<LoginUser>(JSON.parse(localStorage.getItem(this.userStorageKey)));
  }

  public get currentUserValue(): LoginUser {
    return this.currentUserSubject.value;
  }

  login(loginUser: LoginUser) {
    console.log(loginUser);
    this.authController.getAuthenticationTokenUsingPOST(loginUser).subscribe(token => {
      localStorage.setItem(this.userStorageKey, JSON.stringify(token));
      this.currentUserSubject.next(loginUser);
    });

    // return this.http.post<any>("", loginUser, this.httpOptions) // todo real login here and set token + check login success
    //   // .pipe(user => {
    //   .subscribe(user => {
    //     localStorage.setItem(this.userStorageKey, JSON.stringify(user));
    //     this.currentUserSubject.next(user);
    //     return user;
    //   });
  }

  logout() {
    localStorage.removeItem(this.userStorageKey)
    localStorage.removeItem(this.tokenStorageKey)
    this.currentUserSubject.next(null);
  }

  public getToken(): string {
    return localStorage.getItem(this.tokenStorageKey);
  }

  public isAuthenticated(): boolean {
    return !!this.currentUserValue;
    // const token = this.getToken();
    // return tokenNotExpired(null, token);
  }

  public isAdmin(): boolean {
    return this.currentUserValue.userName === "admin";
  }

}
