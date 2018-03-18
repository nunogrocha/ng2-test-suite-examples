import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../team';

@Component({
  selector: 'app-team-info-presentation',
  templateUrl: './team-info-presentation.component.html',
  styleUrls: ['./team-info-presentation.component.css']
})
export class TeamInfoPresentationComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
