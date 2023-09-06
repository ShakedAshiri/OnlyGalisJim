import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LevelService} from "../../level.service";
import {LevelNode, LEVELS} from "../../level-node";

@Component({
  selector: 'app-level-page',
  templateUrl: './level-page.component.html',
  styleUrls: ['./level-page.component.scss']
})
export class LevelPageComponent implements OnInit {
  public level: LevelNode = {id:-1, nextPossibleLevels:[], name:"", background:""};

  constructor(private route: ActivatedRoute,
              protected levelService: LevelService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.levelService.getNextEvent().subscribe(lvl => {
      this.next(lvl);
    });
    // TODO: CHANGE!!!
    // set current level (maybe only relevant during programming)
    let fromURL =window.location.href.substr((window.location.href).length - 1);
    this.levelService.nextLevel(parseInt(fromURL));
  }

  next(idOption: number) {
    // Separate between levels and endings
    if (idOption > 0) {
      this.level = this.levelService.getLevel(idOption);
      let navTo = '/level/' + idOption;
      this.router.navigate([navTo]);
    } else {
      let navTo = 'end/' + idOption;
      this.router.navigate([navTo]);
    }
  }

  getLevelBackground() {
   return "background-image: url('/assets/" + this.level.background + "')";
  }
}
