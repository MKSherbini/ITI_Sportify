import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './modules/shared/header/header.component';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import {NewsComponent} from "./modules/news/news.component";

const routes: Routes = [
  {path:'user',
  component:LayoutComponent,
  loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)
  // ,  canActivate:[AuthGuard]
  },
  {path:'',
  component:LayoutComponent,
  loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
  },

  {path:'news',
    component:NewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
