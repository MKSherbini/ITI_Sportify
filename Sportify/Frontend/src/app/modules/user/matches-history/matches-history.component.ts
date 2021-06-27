import { Component, OnInit } from '@angular/core';
import { MatchAndResult } from 'src/app/models/MatchAndResult';
import { MatchAndSelection } from 'src/app/models/MatchAndSelection';
import { MatchSelectionDto } from 'src/app/models/MatchSelectionDto';
import { MatchDto, MatchesControllerService } from 'src/app/openapi';
import { UserPredictionService } from 'src/app/userScoresOpenApi';
import { MatchesResourceService } from 'src/app/userScoresOpenApi/api/matchesResource.service';
import { MatchResultHistoryDto } from 'src/app/userScoresOpenApi/model/matchResultHistoryDto';

@Component({
  selector: 'app-matches-history',
  templateUrl: './matches-history.component.html',
  styleUrls: ['./matches-history.component.css']
})
export class MatchesHistoryComponent implements OnInit {

  finishedMatches: MatchAndResult[]=[];
  notFinishedMatches: MatchAndSelection[]=[];
  userScore:number;
  loadedData:number=0;
  constructor(private _matchService: MatchesControllerService, private _matchesRresource: MatchesResourceService, private _us:UserPredictionService) { }

  ngOnInit(): void {
    //TODO get User Email form Login Service
    this._matchesRresource.getFinishedMatchesUsingGET("Test").subscribe(r => {
      this.getFinishedMatches(r as MatchResultHistoryDto[]);
        this.loadedData++;
    });
    this._matchesRresource.getNotFinishedMatchesUsingGET("Test").subscribe(r => {
      console.log(r)
      this.getNotFinishedMatches(r as MatchSelectionDto[]);
      this.loadedData++;
    })

    this._us.getUserScoreUsingGET("Test").subscribe(r=>{
        this.userScore=r;
        this.loadedData++;
    })
  }
  getFinishedMatches(arg0: MatchResultHistoryDto[]) {
    arg0.forEach(match=>{
      this._matchService.getMatchUsingGET(match.matchId).subscribe(e=>{
        let matchAndResult:MatchAndResult = new MatchAndResult();
        matchAndResult.matchDto = e;
        matchAndResult.matchResult = match;
        let selectedTeam = e.teams.filter(team => team.team.id == match.selectedTeamId);
        matchAndResult.selectedTeam = selectedTeam[0].team.name;
        this.finishedMatches.push(matchAndResult);
      })
    })
  }


  getNotFinishedMatches(matchResults: MatchSelectionDto[]) {
    matchResults.forEach(match => {
      this._matchService.getMatchUsingGET(match.matchId).subscribe(e => {
        let matchAndSelection: MatchAndSelection = new MatchAndSelection();
        matchAndSelection.matchDto = e;
        console.log(e)
        let selectedTeam = e.teams.filter(team => team.team.id == match.selectedTeamId);
        matchAndSelection.selectedTeam = selectedTeam[0].team.name;
        this.notFinishedMatches.push(matchAndSelection)
      })
    })






  }



}
