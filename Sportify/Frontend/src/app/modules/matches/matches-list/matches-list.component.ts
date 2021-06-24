import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Game, GamesControllerService, MatchDto } from 'src/app/openapi';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  x:number=0;
  selectedFilter:string="Show All";
  latestMatches: MatchDto[];
  shownMatches:MatchDto[];
  @ViewChild('matchesGroupInput') myInput: ElementRef;

  constructor(private gamesService: GamesControllerService) { }

  ngOnInit(): void {
    this.gamesService.getGameMatchesUsingGET(Game.CodeNameEnum.Lol).subscribe(ret => {
      this.latestMatches = ret;
      this.shownMatches=this.latestMatches;
    })

  }

  getLolMatches(){
    this.gamesService.getGameMatchesUsingGET(Game.CodeNameEnum.Lol).subscribe(gameMatches =>{
      console.log(gameMatches.length);
      this.latestMatches = gameMatches;
      this.changeMatches();
    })
  }

  getValorantMatches(){
    this.gamesService.getGameMatchesUsingGET(Game.CodeNameEnum.Valorant).subscribe(gameMatches =>{
      this.latestMatches = gameMatches;
      this.changeMatches();
    })
  }

  getDota2Matches(){
    this.gamesService.getGameMatchesUsingGET(Game.CodeNameEnum.Dota2).subscribe(gameMatches =>{
      this.latestMatches = gameMatches;
      this.changeMatches();
    })
  }

  getCodmwMatches(){
    this.gamesService.getGameMatchesUsingGET(Game.CodeNameEnum.Codmw).subscribe(gameMatches =>{
      this.latestMatches = gameMatches;
      this.changeMatches();
    })
  }

  changeMatches(){
    switch(this.selectedFilter){
      case "Show All":
        this.shownMatches=this.latestMatches;
        break;
      case "Finished":
        this.shownMatches=this.latestMatches.filter(match=>  match.status==MatchDto.StatusEnum.Finished );
        break;
        case "Not Started":
          this.shownMatches=this.latestMatches.filter(match=>  match.status==MatchDto.StatusEnum.NotStarted);
        break;
    }
  }


}
