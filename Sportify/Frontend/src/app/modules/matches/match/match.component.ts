import { Component, Input, OnInit } from '@angular/core';
import { MatchDto } from 'src/app/models/MatchDto';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input("match")
  match:MatchDto;

  constructor() { }

  ngOnInit(): void {
    this.checkRequiredFields(this.match);
  }

  checkRequiredFields(input) {
    if(input === null) {
       throw new Error("Match is required");
    }
 }
}
