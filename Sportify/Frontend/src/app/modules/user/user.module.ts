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
import { FinishedMatchesComponent } from './finished-matches/finished-matches.component';
import { NotFinishedMatchesComponent } from './not-finished-matches/not-finished-matches.component';
import { UserGuard } from 'src/app/guards/user.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

const routes: Routes = [
  { path: "history", component: MatchesHistoryComponent, canActivate: [AuthGuard, UserGuard] },
  { path: "register", component: RegistrationComponent },
  { path: "login", component: LoginscreenComponent }
]

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    MatchesHistoryComponent,
    FinishedMatchesComponent,
    NotFinishedMatchesComponent,
    LoginscreenComponent,
    DialogboxComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule, FormsModule, MatButtonToggleModule,MatDialogModule, RouterModule.forChild(routes)
  ], exports: [LoginComponent]
})
export class UserModule { }
