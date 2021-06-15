import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MatchesModule } from '../matches/matches.module';


const routes: Routes = [
  {path:'second',component:SecondPageComponent,canActivate:[AuthGuard]},
  {path:"",component:HomeLayoutComponent}

]
@NgModule({
  declarations: [
    WelcomeComponent,
    NavComponent,
    HomeLayoutComponent,
    SecondPageComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,
    MatchesModule
  ],
  bootstrap: [HomeLayoutComponent]

})
export class HomeModule { }
