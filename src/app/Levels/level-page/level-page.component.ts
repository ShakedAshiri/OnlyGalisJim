import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LevelService} from "../../level.service";
import {LevelNode, LEVELS} from "../../level-node";

@Component({
  selector: 'app-level-page',
  templateUrl: './level-page.component.html',
  styleUrls: ['./level-page.component.scss']
})
export class LevelPageComponent implements OnInit {
  public level: LevelNode = {id:-1, nextPossibleLevels:[], name:""};

  constructor(private route: ActivatedRoute,
              protected levelService: LevelService,
              private router: Router) { }

  ngOnInit(): void {
    let lvl = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.level = this.levelService.getLevel(lvl);

    this.levelService.getNextEvent().subscribe(lvl => {
      this.next(lvl);
    })
  }

  next(idOption: number) {
    // Separate between levels and endings
    if (idOption > 0) {
      this.level = this.levelService.getLevel(idOption);
      let navTo = 'level/' + idOption;
      this.router.navigate([navTo]);
    } else {
      let navTo = 'end/' + idOption;
      this.router.navigate([navTo]);
    }
  }
}
