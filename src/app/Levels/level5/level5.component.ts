import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LevelService} from "../../level.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-level5',
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.scss']
})
export class Level5Component implements OnInit {

  openAd : boolean = false;
  adText: string = "רק היום רק היום! צא לחופשה שחיילים רק חולמים עליה!";
  nextClicked : boolean = false;
  adClicked: boolean = false;

  // temp
  questionText: {quest1: string, quest2: string} =  {quest1: "1. שאלה כלשהי", quest2: "2. שאלה נוספת"}
  buttonText: string = "המשך >";
  isDone: boolean = false;

  constructor(public levelService: LevelService) { }

  ngOnInit(): void {
  }

  clickNext() {
    if (!this.isDone) {
      this.nextClicked = true;
      this.openAd = true;

    } else {
      this.levelService.nextLevel(1);
    }
  }

  adToggle(isOpen: boolean) {
    this.adClicked = isOpen;
    this.openAd = isOpen;
  }

  closeAd() {
    if (this.adClicked) {
      this.adToggle(false);
    } else {

      // next questions
      this.questionText = {quest1: "3. עוד שאלה", quest2: "4. אפילו עוד אחת"}
      this.buttonText = "סיימתי!";
      this.isDone = true;
    }
  }
}
