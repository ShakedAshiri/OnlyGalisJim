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

  countdownArray: number[] = [100, 99, 98, 90, 84, 76, 53, 20, 6, 3, 2, 1, 0];
  countdownIndex: number = 0;
  countdownCounter: number = this.countdownArray[this.countdownIndex]

  signText = "אז מה, אולי תחתום קבע?";
  escapeText: string[] = ["גל?", "גל????", "הוא ברח!!!"];
  escaped: boolean = false;
  jimRight = 0;
  MAX_LEFT = -68;
  MAX_RIGHT = 47;

  constructor(public levelService: LevelService,
              public PopupService: PopupServiceService) { }

  ngOnInit(): void {}


  countdown() {
    this.countdownIndex++;
    this.countdownCounter = this.countdownArray[this.countdownIndex];

    if (this.countdownIndex + 1 == this.countdownArray.length) {
      // YAY msg
      this.PopupService.openPopupDialog(
        { message: "מזל טוב!!!",
          buttonText: {
            ok: "?מוכן לשלב הבא"
          }
        }).subscribe(result => {
          this.levelService.nextLevel(LEVELS.WORK_OR_TRIP);
      });
    }
  }

  sign() {
    this.PopupService.openPopupDialog(
      { message: this.signText,
        buttonText: {
          ok: "יאללה",
          cancel: "לא"
        }
      }).subscribe(result => {
      if (result) {
        // Choose to sign == immediate lose
        this.levelService.nextLevel(LEVELS.END_DEFAULT);
      }
    });
  }

  @HostListener('window:keydown.arrowLeft', ['$event'])
  handleLeftKeyDown(event: KeyboardEvent) {
    if (this.escaped)
      return;

    if (this.jimRight >= this.MAX_RIGHT) {
      // stop
      this.galEscapedMsg();
    } else {
      this.jimRight += 1;
    }
  }

  @HostListener('window:keydown.arrowRight', ['$event'])
  handleRightKeyDown(event: KeyboardEvent) {
    if (this.escaped)
      return;
    if (this.jimRight <= this.MAX_LEFT) {
      // stop
      this.galEscapedMsg();
    } else {
      this.jimRight -= 1;
    }
  }

  galEscapedMsg() {
    this.escaped = true;
    this.PopupService.openPopupDialog(
      { message: this.escapeText[0],
        buttonText: {
          ok: "?"
        }
      }).subscribe(result => {

        //msg 2
        this.PopupService.openPopupDialog(
          { message: this.escapeText[1],
            buttonText: {
              ok: "!"
            }
          }).subscribe(result => {

            // msg 3
            this.PopupService.openPopupDialog(
              { message: this.escapeText[2],
                buttonText: {
                  ok: "!אוי לא"
                }
              }).subscribe(result => {
                this.levelService.nextLevel(LEVELS.CRIMINAL);
            });
        });
    });
  }
}
