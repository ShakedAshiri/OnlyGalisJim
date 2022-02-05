import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LevelService} from "../level.service";

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit {
  @Output() nextEvent = new EventEmitter<number>();

  constructor(private levelService: LevelService) { }

  ngOnInit(): void {
    this.levelService.setHasBeard(true);
  }

  next(id: number): void {
    this.nextEvent.next(id);
  }
}
