import { PopupServiceService, PopupDataNode } from './../../popup-service.service';
import {Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import {LevelService} from "../../level.service";
import { LEVELS } from '../../level-node';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit {

  countdownCounter: number = 100;
  //signPopup = false;
  signText = "אז מה, אולי תחתום קבע?";
  jimRight = 539;

  constructor(public levelService: LevelService,
              public PopupService: PopupServiceService) { }

  ngOnInit(): void {

  }

  countdown() {
    //TODO:delete!!!
    //this.levelService.nextLevel(0);


    this.countdownCounter--;

    if (this.countdownCounter == 0) {
      this.levelService.nextLevel(LEVELS.WORK_OR_TRIP);
    }
  }

  sign() {
    //this.signPopup = true;
    let foo: PopupDataNode = { message: this.signText, buttonText: {
      ok: "יאללה",
      cancel: "לא"
    }};
    this.PopupService.openPopupDialog(foo);
    this.PopupService.dialogClosedSub().subscribe(result => {
      if (result) {
        // Choose to sign == immediate lose
        this.levelService.nextLevel(LEVELS.END_DEFAULT);
      }
    });
  }

  @HostListener('window:keydown.arrowLeft', ['$event'])
  handleLeftKeyDown(event: KeyboardEvent) {
    if (this.jimRight >= 1880) {
      // stop
      this.levelService.nextLevel(LEVELS.CRIMINAL);
    } else {
      this.jimRight += 8;
    }
  }

  @HostListener('window:keydown.arrowRight', ['$event'])
  handleRightKeyDown(event: KeyboardEvent) {
    if (this.jimRight <= -253) {
      // stop
      this.levelService.nextLevel(LEVELS.CRIMINAL)
    } else {
      this.jimRight -= 8;
    }
  }
}
