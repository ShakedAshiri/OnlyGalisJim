import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-level5',
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.scss']
})
export class Level5Component implements OnInit {
  @Output() nextEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  next(id: number): void {
    this.nextEvent.next(id);
  }
}
