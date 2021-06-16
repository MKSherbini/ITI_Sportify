import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MatchesModule } from '../matches/matches.module';
import { UserModule } from '../user/user.module';


const routes: Routes = [
  { path: 'second', component: SecondPageComponent, canActivate: [AuthGuard] },
  { path: '', component: WelcomeComponent }
]
@NgModule({
  declarations: [
    WelcomeComponent,
    SecondPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: []

})
export class HomeModule { }
