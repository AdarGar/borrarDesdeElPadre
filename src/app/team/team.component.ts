import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  @Input() team: Person[] = [];
  @Output() borra = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  remove(person: Person) {
    this.borra.emit(person);
  }
}
