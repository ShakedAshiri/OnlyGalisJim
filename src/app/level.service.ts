import {EventEmitter, Injectable, Output} from '@angular/core';
import {LevelNode, LEVELS} from "./level-node";
import {BehaviorSubject, Observable} from "rxjs";
//import {readFileSync} from "fs";

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  @Output() private nextEvent = new EventEmitter<LEVELS>();

  get jim(): { src: string } {
    return this._jim;
  }

  set jim(value: { src: string }) {
    this._jim = value;
  }
  levelsFile: any;
  private _userInteraction: BehaviorSubject<string> = new BehaviorSubject("");

  currentLevel: LEVELS = LEVELS.ARMY_BASE;
  levelNodes: LevelNode[] = [];
  endings: LevelNode[] = [];

  private _jim: {src: string} = {src:"assets/jim.PNG"};

  // params
  hasBeard = false;
  private _money = 0;

  constructor() {
    /*var lvl1 = <LevelNode>{};
    lvl1.id = 1;
    lvl1.nextPossibleLevels = [2,3,-1,-2];
    lvl1.name = "start";*/

    // army base
    var lvl2 = <LevelNode>{};
    lvl2.id = LEVELS.ARMY_BASE;
    lvl2.nextPossibleLevels = [LEVELS.WORK_OR_TRIP, LEVELS.END_DEFAULT, LEVELS.CRIMINAL];
    lvl2.name = "army";

    // work or trip?
    var lvl5 = <LevelNode>{};
    lvl5.id = LEVELS.WORK_OR_TRIP;
    lvl5.nextPossibleLevels = [LEVELS.CHOOSE_HOLIDAY, LEVELS.COINS, LEVELS.END_DEFAULT]; //LEVELS.COINS, LEVELS.BARTENDER, LEVELS.SHARKS
    lvl5.name = "workOrTrip";

    // choose work
    /*var lvl3 = <LevelNode>{};
    lvl3.id = 3;
    lvl3.nextPossibleLevels = [LEVELS.CLOTHES_SHOP,5,6];
    lvl3.name = "choose work";
*/

    // clothes shop
    var lvl4 = <LevelNode>{};
    lvl4.id = LEVELS.CLOTHES_SHOP;
    lvl4.nextPossibleLevels = [LEVELS.END_DEFAULT, LEVELS.CRIMINAL];
    lvl4.name = "clothes";

    // criminal
    var lvl6 = <LevelNode>{};
    lvl6.id = LEVELS.CRIMINAL;
    lvl6.nextPossibleLevels = [LEVELS.END_DEFAULT];
    lvl6.name = "criminal";


    // Israel trail
    var lvl7 = <LevelNode>{};
    lvl7.id = LEVELS.ISRAEL_TRAIL;
    lvl7.nextPossibleLevels = [LEVELS.END_DEFAULT];
    lvl7.name = "IsraelTrip";


    // Coins
    var lvl8 = <LevelNode>{};
    lvl8.id = LEVELS.COINS;
    lvl8.nextPossibleLevels = [LEVELS.END_DEFAULT];
    lvl8.name = "coins";

    // Bartender
    var lvl9 = <LevelNode>{};
    lvl9.id = LEVELS.BARTENDER;
    lvl9.nextPossibleLevels = [LEVELS.END_DEFAULT];
    lvl9.name = "bartender";

    // Sharks
    var lvl10 = <LevelNode>{};
    lvl10.id = LEVELS.SHARKS;
    lvl10.nextPossibleLevels = [LEVELS.END_DEFAULT];
    lvl10.name = "sharks";

    // Choose holidy
    var lvl11 = <LevelNode>{};
    lvl11.id = LEVELS.CHOOSE_HOLIDAY;
    lvl11.nextPossibleLevels = [LEVELS.ISRAEL_TRAIL, LEVELS.END_DEFAULT, LEVELS.END_DEFAULT];
    lvl11.name = "choose holiday";

    this.levelNodes.push(lvl2, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9, lvl10, lvl11);

    var end1 = <LevelNode>{};
    end1.id = LEVELS.END_DEFAULT;
    end1.nextPossibleLevels = [2];

    /*var end2 = <LevelNode>{};
    end2.id = LEVELS.END_;
    end2.nextPossibleLevels = [LEVELS.ARMY_BASE];

    var end3 = <LevelNode>{};
    end3.id = LEVELS.END_DEFAULT;
    end3.nextPossibleLevels = [LEVELS.ARMY_BASE];
*/
    this.endings.push(end1);//, end2, end3);
  }


  loadLevels() {
    /*let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.levelsFile = fileReader.result;
    }*/

    //let levels = readFileSync('./levels.txt', 'utf-8')
  }

  getLevel(id: number) : LevelNode {
    let lvl = this.levelNodes.find(lvl => lvl.id === id);
    return <LevelNode>lvl;
  }

  getLevelAfterEnd(id: number) : number {
    let lvl = this.endings.find(lvl => lvl.id === id);
    return (<LevelNode>lvl).nextPossibleLevels[0];
  }

  setHasBeard(b: boolean) {
    this.hasBeard = b;
  }

  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }

  public get getUserInteraction(): Observable<any>{
    return this._userInteraction.asObservable();
  }

  setUserInteraction(val: any) {
    this._userInteraction.next(val);
  }

  getNextEvent() {
    return this.nextEvent;
  }

  nextLevel(id: LEVELS): void {
    console.log("nextlevel")
    console.log(id)
    // Allow only if possible next level
    if ( this.getLevel(this.currentLevel).nextPossibleLevels.includes(id) ) {
      this.nextEvent.next(id);
    } else {
      this.nextEvent.next(LEVELS.END_DEFAULT);
      console.log("ERROR: unknown ending")
    }

  }
}
