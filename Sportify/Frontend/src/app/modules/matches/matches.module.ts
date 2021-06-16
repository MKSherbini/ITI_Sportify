import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatchesListComponent } from './matches-list/matches-list.component';

const routes: Routes = [
  { path: "", component: MatchesListComponent }
]

@NgModule({
  declarations: [
    MatchComponent,
    MatchesListComponent,
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatchComponent,
    MatchesListComponent
  ]
})
export class MatchesModule { }
