import { Component, Input, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { TeamMatchScoreDto } from 'src/app/openapi/model/teamMatchScoreDto';
import { Output, EventEmitter } from '@angular/core';
import { Selection } from 'src/app/models/Selection';

@Component({
  selector: 'app-prediction-slider',
  templateUrl: './prediction-slider.component.html',
  styleUrls: ['./prediction-slider.component.css']
})
export class PredictionSliderComponent implements OnInit {

 @Input("team01") team01:TeamMatchScoreDto;
 @Input("team02") team02:TeamMatchScoreDto;
 @Output() eventEmiitter=new EventEmitter<Selection>();

  constructor() { }

  ngOnInit(): void {
  }
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200,
    step: 100,
    translate: (value: number): string => {
      switch (value) {
        case 0:
          this.changeState(Selection.TEAM01_SELECTED);
          return this.team01.team.acronym;
        case 100:
          this.changeState(Selection.NOTSELECTED);
          return "Choose Team"
        case 200:
          this.changeState(Selection.TEAM02_SELECTED);
          return this.team02.team.acronym;
      }

    }
  };
  changeState(state:Selection){
    this.eventEmiitter.emit(state);
  }
}
