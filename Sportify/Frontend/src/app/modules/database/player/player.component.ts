import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerControllerService, PlayerDto, TeamsControllerService } from 'src/app/openapi';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: PlayerDto;

  constructor(private _activatedRoute: ActivatedRoute, private playerService: PlayerControllerService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.playerService.getPlayerUsingGET(+params.get("id")).subscribe(player => {
        this.player = player;
      })
    })
  }

}
