import { MatDialog } from '@angular/material/dialog';
import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {LevelService} from "../../level.service";
import {Observable, Subscription} from "rxjs";
import {LEVELS, LevelNode} from "../../level-node";
import {PopupComponent} from "../../popup/popup.component";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss'],
})
export class Level4Component implements OnInit {


  currJim : {src: string, price: number} = {src:"assets/jim.PNG", price: 0};
  jimRight: number = 290;
  moveJim: boolean = false;
  prices: Map<string, {src: string, price: number}> = new Map<string, {src: string, price: number}>();

  buyShirt : {isNow: boolean, text: string}= {isNow:false, text:""};

  constructor(public levelService: LevelService){
    //TODO: delete
    this.levelService.money = 200;
  }

  ngOnInit(): void {
    let def = {src: "assets/jim.PNG", price: 0};
    let blue = {src: "assets/blue-jim.PNG", price: 200};
    let suit = {src: "assets/suit-jim.png", price: 300};

    this.prices.set("default", def);
    this.prices.set("blue", blue);
    this.prices.set("suit", suit);
  }

  @HostListener('window:keydown.arrowLeft', ['$event'])
  handleLeftKeyDown(event: KeyboardEvent) {
    if (this.moveJim) {
      if (this.jimRight >= 421) {
        // stop - time to pay
        this.jimRight = 420;
        this.moveJim = false;
        this.pay();
      } else {
        this.jimRight += 5;
      }
    }
  }

  @HostListener('window:keydown.arrowRight', ['$event'])
  handleRightKeyDown(event: KeyboardEvent) {
    if (this.moveJim) {
      if (this.jimRight <= -464) {
        // stop - criminal!
        this.moveJim = false;
        this.levelService.nextLevel(1)
      } else {
        this.jimRight -= 5;
      }
    }
  }

  pickShirt(id :string) {
    if (this.prices.has(id)) {
      // @ts-ignore
      this.currJim = this.prices.get(id);
      this.moveJim = true;
    }
  }

  pay() {
    this.buyShirt.isNow = true;
    if (this.currJim.price <= this.levelService.money) {
      this.buyShirt.text = "נראה טוב אחי!";
    } else {
      this.buyShirt.text = "בואנה, הגזמת..";
    }
  }

  ok() {
    this.buyShirt.isNow = false;
    this.moveJim = true;
    if (this.currJim.price <= this.levelService.money) {
      this.levelService.jim.src = this.currJim.src;
      this.levelService.nextLevel(LEVELS.END_DEFAULT);
    }
  }
}
