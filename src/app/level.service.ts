import { Injectable } from '@angular/core';
import {LevelNode} from "./level-node";
import {BehaviorSubject, Observable} from "rxjs";
//import {readFileSync} from "fs";

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levelsFile: any;
  private _userInteraction: BehaviorSubject<string> = new BehaviorSubject("");

  currentLevel: number = -1;
  levelNodes: LevelNode[] = [];
  endings: LevelNode[] = [];

  // params
  hasBeard = false;


  constructor() {
    var lvl = <LevelNode>{};
    lvl.id = 1;
    lvl.nextLevels = [2,3,-1,-2];
    lvl.name = "start";

// u is criminal - handle later
    var lvl1 = <LevelNode>{};
    lvl1.id = 2;
    lvl1.nextLevels = [-1];
    lvl1.name = "criminal";


    // choose work
    var lvl2 = <LevelNode>{};
    lvl2.id = 3;
    lvl2.nextLevels = [4,5,6];
    lvl2.name = "choose work";

    // bartender
    var lvl3 = <LevelNode>{};
    lvl3.id = 4;
    lvl3.nextLevels = [7];
    lvl3.name = "bartender";

    // sharks
    var lvl4 = <LevelNode>{};
    lvl4.id = 5;
    lvl4.nextLevels = [7];
    lvl4.name = "sharks";

    // accountant
    var lvl5 = <LevelNode>{};
    lvl5.id = 6;
    lvl5.nextLevels = [7];
    lvl5.name = "accountant";

    // clothes
    var lvl6 = <LevelNode>{};
    lvl6.id = 7;
    lvl6.nextLevels = [8];
    lvl6.name = "clothes";

    // field trip time
    var lvl7 = <LevelNode>{};
    lvl7.id = 8;
    lvl7.nextLevels = [-3, -3, -3];
    lvl7.name = "field trip time";


    this.levelNodes.push(lvl, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7);

    var end1 = <LevelNode>{};
    end1.id = -1;
    end1.nextLevels = [1];

    var end2 = <LevelNode>{};
    end2.id = -2;
    end2.nextLevels = [1];

    var end3 = <LevelNode>{};
    end3.id = -3;
    end3.nextLevels = [1];

    this.endings.push(end1, end2, end3);
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
    return (<LevelNode>lvl).nextLevels[0];
  }

  setHasBeard(b: boolean) {
    this.hasBeard = b;
  }

  public get getUserInteraction(): Observable<any>{
    return this._userInteraction.asObservable();
  }

  setUserInteraction(val: string) {
    this._userInteraction.next(val);
  }
}
