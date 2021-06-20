import { Component, OnInit } from '@angular/core';
import { Game, GamesControllerService, MatchDto } from 'src/app/openapi';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  latestMatches: MatchDto[];

  constructor(private gamesService: GamesControllerService) { }

  ngOnInit(): void {
    console.log("MatchesListComponent");
    this.gamesService.getGameMatchesUsingGET(Game.CodeNameEnum.Lol).subscribe(ret => {
      console.log(ret.length);
      console.log(ret[0].name);
      this.latestMatches = ret;
    })
  }

}
