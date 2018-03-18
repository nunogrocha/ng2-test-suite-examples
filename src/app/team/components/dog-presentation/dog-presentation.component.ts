import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-presentation',
  templateUrl: './dog-presentation.component.html',
  styleUrls: ['./dog-presentation.component.css']
})
export class DogPresentationComponent implements OnInit {
  @Input() race: string;

  constructor() { }

  ngOnInit() {
  }

}
