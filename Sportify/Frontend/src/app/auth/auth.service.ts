import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser } from '../models/LoginUser';

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

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginUser>(JSON.parse(localStorage.getItem(this.userStorageKey)));
  }

  public get currentUserValue(): LoginUser {
    return this.currentUserSubject.value;
  }

  login(loginUser: LoginUser) {
    return this.http.post<any>("", loginUser, this.httpOptions) // todo real login here and set token + check login success
      // .pipe(user => {
      .subscribe(user => {
        localStorage.setItem(this.userStorageKey, JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      });
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
