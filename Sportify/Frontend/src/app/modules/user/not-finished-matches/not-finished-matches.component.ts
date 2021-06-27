import { Component, Input, OnInit } from '@angular/core';
import { MatchAndSelection } from 'src/app/models/MatchAndSelection';

@Component({
  selector: 'app-not-finished-matches',
  templateUrl: './not-finished-matches.component.html',
  styleUrls: ['./not-finished-matches.component.css']
})
export class NotFinishedMatchesComponent implements OnInit {

  @Input()
  matchAndSelection: MatchAndSelection;
  constructor() { }

  ngOnInit(): void {
  }

}
