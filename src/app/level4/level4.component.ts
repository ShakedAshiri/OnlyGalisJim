import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss']
})
export class Level4Component implements OnInit {
  @Output() nextEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  next(id: number): void {
    this.nextEvent.next(id);
  }
}
