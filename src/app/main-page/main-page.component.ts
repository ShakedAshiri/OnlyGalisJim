import { Component, OnInit } from '@angular/core';
import {LevelService} from "../level.service";

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
    //this.levelService.currentLevel = 2;
  }

  titlePlus() {
    this.titleNum++;
  }
}
