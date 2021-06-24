import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { MatchPredictComponent } from './match-predict/match-predict.component';
import { PredictionSliderComponent } from './prediction-slider/prediction-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: "", component: MatchesListComponent },
  { path: ":id", component: MatchPredictComponent },
]

@NgModule({
  declarations: [
    MatchComponent,
    MatchesListComponent,
    MatchPredictComponent,
    PredictionSliderComponent,
  ],
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(routes),NgxSliderModule,SharedModule
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
