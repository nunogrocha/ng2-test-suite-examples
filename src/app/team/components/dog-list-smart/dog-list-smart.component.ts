import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team-service.service';
import { Observable } from 'rxjs/Observable';
import { Team } from '../../team';
import { APImessage } from '../../APImessage';

@Component({
  selector: 'app-dog-list-smart',
  template: `
    <app-dog-list-presentation
      [breeds]="dogs$ | async"
    ></app-dog-list-presentation>
  `
})
export class DogListSmartComponent implements OnInit {
  dogs$: Observable<string>;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.dogs$ = this.teamService.getHttpDogs();
  }

}
