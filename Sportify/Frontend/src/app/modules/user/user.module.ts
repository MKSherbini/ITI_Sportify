import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatchesHistoryComponent } from './matches-history/matches-history.component';
import { NotFinishedMatchesComponent } from './not-finished-matches/not-finished-matches.component';
import { FinishedMatchesComponent } from './finished-matches/finished-matches.component';

const routes:Routes=[
  {path:"history",component:MatchesHistoryComponent},
  {path:"",component:LoginComponent},
  {path:"Register",component:RegistrationComponent}
]

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    MatchesHistoryComponent,
    NotFinishedMatchesComponent,
    FinishedMatchesComponent,
  ],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
