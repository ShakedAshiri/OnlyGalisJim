import { Component, OnInit } from '@angular/core';
import {LevelService} from "../level.service";
import { LEVELS } from '../level-node';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public titleNum = 0;

  constructor(protected levelService: LevelService) { }

  ngOnInit(): void {
  }

  start() {
    this.levelService.nextLevel(LEVELS.ARMY_BASE);
  }

  titlePlus() {
    this.titleNum++;
  }
}
