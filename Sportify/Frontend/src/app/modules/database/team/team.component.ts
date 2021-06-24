import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamDto, TeamsControllerService } from 'src/app/openapi';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team: TeamDto;

  constructor(private _activatedRoute: ActivatedRoute, private teamsService: TeamsControllerService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.teamsService.getTeamUsingGET(+params.get("id")).subscribe(team => {
        console.log(team);

        this.team = team;
      })
    })
  }

}
