import {Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import {LevelService} from "../level.service";

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit {

  countdownCounter: number = 100;
  signPopup = false;
  signText = "אז מה, אולי תחתום קבע?";
  jimRight = 539;

  constructor(public levelService: LevelService) { }

  ngOnInit(): void {

  }

  countdown() {
    //TODO:delete!!!
    //this.levelService.nextLevel(0);


    this.countdownCounter--;

    if (this.countdownCounter == 0) {
      this.levelService.nextLevel(0);
    }
  }

  sign() {
    this.signPopup = true;
  }

  @HostListener('window:keydown.arrowLeft', ['$event'])
  handleLeftKeyDown(event: KeyboardEvent) {
    if (this.jimRight >= 1880) {
      // stop
      this.levelService.nextLevel(2);
    } else {
      this.jimRight += 8;
    }
  }

  @HostListener('window:keydown.arrowRight', ['$event'])
  handleRightKeyDown(event: KeyboardEvent) {
    if (this.jimRight <= -253) {
      // stop
      this.levelService.nextLevel(2)
    } else {
      this.jimRight -= 8;
    }
  }
}
