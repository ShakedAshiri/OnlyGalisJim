import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LevelService} from "../level.service";
import {LevelNode} from "../level-node";

@Component({
  selector: 'app-level-page',
  templateUrl: './level-page.component.html',
  styleUrls: ['./level-page.component.scss']
})
export class LevelPageComponent implements OnInit {
  public level: LevelNode = {id:-1, nextLevels:[], name:""};

  constructor(private route: ActivatedRoute,
              protected levelService: LevelService,
              private router: Router) { }

  ngOnInit(): void {
    let lvl = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.level = this.levelService.getLevel(lvl);
  }

  next(idOption: number) {
    let id = this.level.nextLevels[idOption];

    if (id > 0) {
      this.level = this.levelService.getLevel(id);
    } else {
      let navTo = 'end/' + id;
      this.router.navigate([navTo]);
    }

  }
}
