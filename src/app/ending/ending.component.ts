import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LevelService} from "../level.service";

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.scss']
})
export class EndingComponent implements OnInit {
  endingNum: number = 0;

  constructor(private route: ActivatedRoute,
              private levelService: LevelService,
              private router: Router) { }

  ngOnInit(): void {
    this.endingNum = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  }

  reset() {
    let id = this.levelService.getLevelAfterEnd(this.endingNum);
    let navTo = 'level/' + id;
    this.router.navigate([navTo]);
  }
}
