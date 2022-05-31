import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LevelService} from "../level.service";

@Component({
  selector: 'app-level6',
  templateUrl: './level6.component.html',
  styleUrls: ['./level6.component.scss']
})
export class Level6Component implements OnInit {

  constructor(public levelService: LevelService) { }

  ngOnInit(): void {
  }
}
