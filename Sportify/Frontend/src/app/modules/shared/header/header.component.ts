import {Component, NgModule, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

import {CommonModule} from '@angular/common';
import {LoginComponent} from '../../user/login/login.component';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  logged: boolean;
  isUser:boolean;
  isAdmin:boolean;
  userName: string;

  constructor(private user: LoginService,private _as:AuthService) { }

  ngOnInit(): void {
     this.logged= this._as.isAuthenticated();
     this.isUser=this._as.isUser();
     this.isAdmin=this._as.isAdmin();
     this.userName=this._as.currentUserValue.userName.toUpperCase();
  }

  logout(){
    this._as.logout();
  }


}
