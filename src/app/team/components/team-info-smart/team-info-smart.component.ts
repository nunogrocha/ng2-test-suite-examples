import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../team';

@Component({
  selector: 'app-team-info-smart',
  template: `
    <app-team-info-presentation
      [team]="team">
    </app-team-info-presentation>
  `
})
export class TeamInfoSmartComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
