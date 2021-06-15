import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatchesListComponent } from './matches-list/matches-list.component';


@NgModule({
  declarations: [
    MatchComponent,
    MatchesListComponent
  ],
  imports: [
    CommonModule, RouterModule,HttpClientModule,ReactiveFormsModule,FormsModule
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
