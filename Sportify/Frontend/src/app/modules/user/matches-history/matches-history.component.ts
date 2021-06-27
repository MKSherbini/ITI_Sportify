import { Component, OnInit } from '@angular/core';
import { MatchAndSelection } from 'src/app/models/MatchAndSelection';
import { MatchSelectionDto } from 'src/app/models/MatchSelectionDto';
import { MatchDto, MatchesControllerService } from 'src/app/openapi';
import { MatchesResourceService, MatchResultHistoryDto } from 'src/app/userScoresOpenApi';

@Component({
  selector: 'app-matches-history',
  templateUrl: './matches-history.component.html',
  styleUrls: ['./matches-history.component.css']
})
export class MatchesHistoryComponent implements OnInit {

  finishedMatches: MatchResultHistoryDto[];
  notFinishedMatches: MatchAndSelection[]=[];
  constructor(private _matchService: MatchesControllerService, private _matchesRresource: MatchesResourceService) { }

  ngOnInit(): void {
    //TODO get User Email form Login Service
    this._matchesRresource.getFinishedMatchesUsingGET("Test").subscribe(r => {
      r as MatchResultHistoryDto[];
    });
    this._matchesRresource.getNotFinishedMatchesUsingGET("Test").subscribe(r => {
      console.log(r)
      this.getNotFinishedMatches(r as MatchSelectionDto[]);

    })
  }


  getNotFinishedMatches(matchResults: MatchSelectionDto[]) {
    matchResults.forEach(match => {
      this._matchService.getMatchUsingGET(match.matchId).subscribe(e => {
        let matchAndSelection: MatchAndSelection = new MatchAndSelection();
        matchAndSelection.matchDto = e;
        let selectedTeam = e.teams.filter(team => team.team.id == match.selectedTeamId);
        matchAndSelection.selectedTeam = selectedTeam[0].team.name;
        this.notFinishedMatches.push(matchAndSelection)
      })
    })





  }



}
