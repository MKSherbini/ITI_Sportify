import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes:Routes=[
  {path:"",component:LoginComponent},
  {path:"Register",component:RegistrationComponent}
]

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
