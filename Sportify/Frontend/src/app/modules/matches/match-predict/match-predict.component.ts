import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesControllerService, MatchDto, MatchEntityService } from 'src/app/openapi';
import { GameDetailsControllerService } from 'src/app/openapi/api/gameDetailsController.service';
import { Selection } from 'src/app/models/Selection';
import { UserPredictionService } from 'src/app/userScoresOpenApi';
import { MatchSelectionDto } from 'src/app/models/MatchSelectionDto';

@Component({
  selector: 'app-match-predict',
  templateUrl: './match-predict.component.html',
  styleUrls: ['./match-predict.component.css']
})
export class MatchPredictComponent implements OnInit {
  selectedTeam: Selection;
  match: MatchDto;
  selected: boolean = false;
  constructor(private _userScoresService: UserPredictionService, private _activatedRoute: ActivatedRoute, private _matchService: GamesControllerService) {
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get("id");
      this._matchService.getMatchUsingGET(id).subscribe(e => {
        this.match = e as MatchDto;
      }
      );

    })

  }


  sendPrediction() {
   //TODO add Token to the request header
    this._userScoresService.saveSelectedUsingPOST(this. getSelectionDto()).subscribe(r => {
      console.log("done done done ")
    });
  }

  onChange(state: Selection) {
    if (state == Selection.NOTSELECTED) {
      this.selected = false;
    } else {
      this.selected = true;
      this.selectedTeam = state;
    }
  }


  getSelectionDto(): MatchSelectionDto {
    let selectedPrediction: MatchSelectionDto=new MatchSelectionDto;
    switch (this.selectedTeam) {
      case Selection.TEAM01_SELECTED:
        console.log(this.match.teams[0].team.id)
        selectedPrediction.selectedTeamId = this.match.teams[0].team.id;
        break;
      case Selection.TEAM02_SELECTED:
        console.log(this.match.teams[1].team.id)
        selectedPrediction.selectedTeamId = this.match.teams[1].team.id;
    }

    selectedPrediction.matchId=this.match.id;
    //TODO get user email from the principal
    selectedPrediction.userEmail="Test";
    return selectedPrediction;
  }

}
