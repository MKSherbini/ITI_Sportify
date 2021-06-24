import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './modules/shared/header/header.component';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import {LoginComponent} from './modules/user/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user',
    component: LayoutComponent,
    loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)
    // ,  canActivate:[AuthGuard]
  },
  {
    path: 'matches',
    component: LayoutComponent,
    loadChildren: () => import('../app/modules/matches/matches.module').then(m => m.MatchesModule)
    // ,  canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)
    // ,  canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
