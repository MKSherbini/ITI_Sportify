import { Component, OnInit } from '@angular/core';
import { MatchDto } from 'src/app/models/MatchDto';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  latestMatches:MatchDto[];

  constructor() { }

  ngOnInit(): void {
  }

}
