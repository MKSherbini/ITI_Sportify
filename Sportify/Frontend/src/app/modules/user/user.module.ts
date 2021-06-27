import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MatchesHistoryComponent } from './matches-history/matches-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "history", component: MatchesHistoryComponent },
  { path: "register", component: RegistrationComponent },
]

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    MatchesHistoryComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule, FormsModule, MatButtonToggleModule, RouterModule.forChild(routes)
  ], exports: [LoginComponent]
})
export class UserModule { }
