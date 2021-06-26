import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegistrationComponent}
];

@NgModule({
    declarations: [
        RegistrationComponent,
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule, RouterModule.forChild(routes), ReactiveFormsModule
    ]
})
export class UserModule { }
