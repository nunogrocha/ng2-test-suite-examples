import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-list-presentation',
  templateUrl: './dog-list-presentation.component.html',
  styleUrls: ['./dog-list-presentation.component.css']
})
export class DogListPresentationComponent implements OnInit {
  @Input() breeds: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
