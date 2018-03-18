import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team-service.service';
import { Observable } from 'rxjs/Observable';
import { Team } from '../../team';

@Component({
  selector: 'app-team-list-smart',
  template: `
    <app-team-list-presentation
      [teams]="teams$ | async"
    ></app-team-list-presentation>
  `
})
export class TeamListSmartComponent implements OnInit {
  teams$: Observable<Array<Team>>;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
  }

}
