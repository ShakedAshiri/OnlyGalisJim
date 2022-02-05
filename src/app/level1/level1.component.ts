import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {
  @Output() nextEvent = new EventEmitter<number>();

  isWait = "";

  constructor() { }

  ngOnInit(): void {

  }

  next(id: number): void {
    this.nextEvent.next(id);
  }
}

