import { Component } from '@angular/core';
import {LevelService} from "./level.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gal';

  constructor(private levelService: LevelService) {
  }

  userInteration(event:any) {
    this.levelService.setUserInteraction("ok");
  }
}
