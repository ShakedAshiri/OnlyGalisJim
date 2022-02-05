import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LevelService} from "../level.service";

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit {
  @Output() nextEvent = new EventEmitter<number>();

  constructor(private levelService: LevelService) { }

  ngOnInit(): void {

  }

  next(id: number): void {
    this.nextEvent.next(id);
  }
}
