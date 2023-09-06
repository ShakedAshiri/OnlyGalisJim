import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LevelService} from "../../level.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { PopupServiceService } from 'src/app/popup-service.service';
import { LEVELS } from 'src/app/level-node';

@Component({
  selector: 'app-level5',
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.scss']
})
export class Level5Component implements OnInit {
  adText: string = "רק היום רק היום! צא לחופשה שחיילים רק חולמים עליה!";
  nextClicked : boolean = false;
  adClicked: boolean = false;
  buttonText: string = "המשך >";
  isDone: boolean = false;

  // temp
  questionText: {quest1: string, quest2: string} =  {quest1: "1. שאלה כלשהי", quest2: "2. שאלה נוספת"}


  constructor(public levelService: LevelService, public popupService: PopupServiceService) { }

  ngOnInit(): void {
  }

  clickNext() {
    if (!this.isDone) {
      this.openAd();
    } else {
      // Calculate best career and progress to that level
      this.popupService.openPopupDialog({ message: "מחשב תוצאות מבחן...", buttonText: {
        ok: "אוקי"
      }}).subscribe(result => {

        this.popupService.openPopupDialog({ message: "חישוב הסתיים! מוכן לגלות את הקריירה המושלמת עבורך?",
        buttonText: {
          ok: "!כן"
        }}).subscribe(result => {
          // TODO: should be accourding to calc result
          this.levelService.nextLevel(LEVELS.BARTENDER);
        });
      });
    }
  }

  openAd() { //clickedNext: boolean
    this.popupService.openPopupDialog({ message: this.adText, buttonText: {
      ok: "!כן",
      cancel: "התעלם"
    }}).subscribe(result => {
      if (result) {
        // Clicked 'yes' - move to holiday level
        this.levelService.nextLevel(LEVELS.CHOOSE_HOLIDAY);
      } else { //if (!this.isDone) {
        this.closeAd();
      }
    });
  }

  closeAd() {
    // next questions
    this.questionText = {quest1: "3. עוד שאלה", quest2: "4. אפילו עוד אחת"}
    this.buttonText = "סיימתי!";
    this.isDone = true;
  }
}
