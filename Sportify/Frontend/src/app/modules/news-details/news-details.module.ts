import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details/news-details.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: ':id', component: NewsDetailsComponent}
];
@NgModule({
  declarations: [
    NewsDetailsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class NewsDetailsModule { }
