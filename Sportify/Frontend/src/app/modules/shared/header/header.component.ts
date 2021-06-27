import {Component, NgModule, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

import {CommonModule} from '@angular/common';
import {LoginComponent} from '../../user/login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  logged: boolean;
  constructor(private user: LoginService) { }

  ngOnInit(): void {
      this.logged = this.user.logged;
  }



}
