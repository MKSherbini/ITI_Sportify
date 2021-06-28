import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { GamenewsComponent } from './gamenews/gamenews.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminGuard } from 'src/app/guards/admin.guard';


const routes: Routes = [
  { path: "add", component: AddnewsComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: ':id', component: NewsDetailsComponent },
  { path: "", component: GamenewsComponent }
];
@NgModule({
  declarations: [
    NewsDetailsComponent,
    GamenewsComponent,
    AddnewsComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
