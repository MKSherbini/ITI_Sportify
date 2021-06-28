import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login';
import { LoginUser } from '../models/LoginUser';
import { AuthenticatingEndPointService, AuthenticationRequest } from '../userOpenApi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<LoginUser>;

  private userStorageKey: string = 'sb';
  private tokenStorageKey: string = 'st';
  private jwtHelper = new JwtHelperService();

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  }

  constructor(private http: HttpClient, private authController: AuthenticatingEndPointService) {
    this.currentUserSubject = new BehaviorSubject<LoginUser>(JSON.parse(localStorage.getItem(this.userStorageKey)));
    console.log(this.getToken());
    console.log("User: " + JSON.stringify(this.currentUserValue));
    console.log("isAuthenticated: " + this.isAuthenticated());
    console.log("isUser: " + this.isUser());
    console.log("isAdmin: " + this.isAdmin());
  }

  public get currentUserValue(): LoginUser {
    return this.currentUserSubject.value;
  }

  login(authUser: AuthenticationRequest) {
    this.authController.getAuthenticationTokenUsingPOST(authUser).subscribe(token => {
      localStorage.setItem(this.tokenStorageKey, JSON.stringify(token["jwt"]));
      let loginUser: LoginUser = new LoginUser();
      let tokenObj = this.jwtHelper.decodeToken(this.getToken());
      loginUser.email = tokenObj["email"];
      loginUser.role = tokenObj["role"];
      loginUser.userName = tokenObj["sub"];
      localStorage.setItem(this.userStorageKey, JSON.stringify(loginUser));
      this.currentUserSubject.next(loginUser);
      console.log(this.getToken());
      // console.log(this.isAuthenticated());
      // console.log(this.isAdmin());
      // this.logout();
      // console.log(this.isAuthenticated());
      // console.log(this.isAdmin());
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
    return !(!this.currentUserValue);
    // const token = this.getToken();
    // return tokenNotExpired(null, token);
  }

  public isAdmin(): boolean {
    return this.isAuthenticated() && (this.currentUserValue.role === "ADMIN_ROLE" || this.currentUserValue.userName === "admin");
  }

  public isUser(): boolean {
    return this.isAuthenticated() && !this.isAdmin();
  }

}
