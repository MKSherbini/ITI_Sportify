import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { GamenewsComponent } from './gamenews/gamenews.component';


const routes: Routes = [
  {path: ':id', component: NewsDetailsComponent},
  {path:"",component:GamenewsComponent}
];
@NgModule({
  declarations: [
    NewsDetailsComponent,
    GamenewsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
