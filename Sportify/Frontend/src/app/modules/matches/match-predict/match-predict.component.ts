import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesControllerService, MatchDto } from 'src/app/openapi';
import { Selection } from 'src/app/models/Selection';
import { UserPredictionService } from 'src/app/userScoresOpenApi';
import { MatchSelectionDto } from 'src/app/models/MatchSelectionDto';
import { MatchesControllerService } from 'src/app/openapi/api/matchesController.service';

@Component({
  selector: 'app-match-predict',
  templateUrl: './match-predict.component.html',
  styleUrls: ['./match-predict.component.css']
})
export class MatchPredictComponent implements OnInit {
  selectedTeam: Selection;
  match: MatchDto;
  selected: boolean = false;
  isSelectedBefore:boolean=false;
  loaded:boolean=false;
  previousSelectionInDB:string;
  constructor(private _userScoresService: UserPredictionService, private _activatedRoute: ActivatedRoute, private _matchService: MatchesControllerService) {
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get("id");
      this._matchService.getMatchUsingGET(id).subscribe(e => {
        this.match = e as MatchDto;


        this._userScoresService.checkSelectedUsingPOST(this.getSelectionDto()).subscribe(r => {
            let matchSelectionDto= r as MatchSelectionDto;
            console.log(r);
            console.log(this.getSelectionDto());
            let selectedTeam= this.match.teams.filter(team=>team.team.id==matchSelectionDto.selectedTeamId);
            this.previousSelectionInDB=selectedTeam[0].team.name;
            this.isSelectedBefore=true;
         });

         this.loaded=true;
      }
      );

    })



  }


  sendPrediction() {
   //TODO add Token to the request header
    this._userScoresService.saveSelectionUsingPOST(this. getSelectionDtoWithTeam()).subscribe(r => {
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


  getSelectionDtoWithTeam(): MatchSelectionDto {
    let selectedPrediction: MatchSelectionDto=new MatchSelectionDto;
    switch (this.selectedTeam) {
      case Selection.TEAM01_SELECTED:
        selectedPrediction.selectedTeamId = this.match.teams[0].team.id;
        break;
      case Selection.TEAM02_SELECTED:
        selectedPrediction.selectedTeamId = this.match.teams[1].team.id;
    }

    selectedPrediction.matchId=this.match.id;
    //TODO get user email from the principal
    selectedPrediction.userEmail="Test";
    return selectedPrediction;
  }
  getSelectionDto():MatchSelectionDto{
    let selectedPrediction: MatchSelectionDto=new MatchSelectionDto;
    selectedPrediction.matchId=this.match.id;
    //TODO get user email from the principal
    selectedPrediction.userEmail="Test";
    return selectedPrediction;
  }

}
