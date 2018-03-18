import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../team';

@Component({
  selector: 'app-team-list-presentation',
  templateUrl: './team-list-presentation.component.html',
  styleUrls: ['./team-list-presentation.component.css']
})
export class TeamListPresentationComponent implements OnInit {
  @Input() teams: Array<Team>;

  constructor() { }

  ngOnInit() {
  }

}
