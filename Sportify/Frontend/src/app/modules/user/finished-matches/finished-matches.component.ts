import { Component, Input, OnInit } from '@angular/core';
import { MatchAndResult } from 'src/app/models/MatchAndResult';

@Component({
  selector: 'app-finished-matches',
  templateUrl: './finished-matches.component.html',
  styleUrls: ['./finished-matches.component.css']
})
export class FinishedMatchesComponent implements OnInit {

  @Input()
  matchAndResult: MatchAndResult;

  constructor() { }

  ngOnInit(): void {
  }

}
