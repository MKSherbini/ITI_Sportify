import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatchesHistoryComponent } from './matches-history/matches-history.component';

const routes:Routes=[
  {path:"history",component:MatchesHistoryComponent},
  {path:"",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
]

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    MatchesHistoryComponent,
  ],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
