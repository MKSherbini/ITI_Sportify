import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "team/:id", component: TeamComponent },
  { path: "player/:id", component: PlayerComponent },
]

@NgModule({
  declarations: [
    PlayerComponent,
    TeamComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DatabaseModule { }
