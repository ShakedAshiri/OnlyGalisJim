import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-level6',
  templateUrl: './level6.component.html',
  styleUrls: ['./level6.component.scss']
})
export class Level6Component implements OnInit {
  @Output() nextEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  next(id: number): void {
    this.nextEvent.next(id);
  }
}
