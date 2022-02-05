import { Injectable } from '@angular/core';
import {LevelNode} from "./level-node";
//import {readFileSync} from "fs";

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levelsFile: any;

  currentLevel: number = -1;
  levelNodes: LevelNode[] = [];
  endings: LevelNode[] = [];

  // params
  hasBeard = false;


  constructor() {
    var lvl = <LevelNode>{};
    lvl.id = 1;
    lvl.nextLevels = [2,3,-1];

// u is criminal - handle later
    var lvl1 = <LevelNode>{};
    lvl1.id = 2;
    lvl1.nextLevels = [-1];

    // choose work
    var lvl2 = <LevelNode>{};
    lvl2.id = 3;
    lvl2.nextLevels = [4,5,6];

    // bartender
    var lvl3 = <LevelNode>{};
    lvl3.id = 4;
    lvl3.nextLevels = [7];

    // sharks
    var lvl4 = <LevelNode>{};
    lvl4.id = 5;
    lvl4.nextLevels = [7];

    // accountant
    var lvl5 = <LevelNode>{};
    lvl5.id = 6;
    lvl5.nextLevels = [7];

    // clothes
    var lvl6 = <LevelNode>{};
    lvl6.id = 7;
    lvl6.nextLevels = [8];

    // field trip time
    var lvl7 = <LevelNode>{};
    lvl7.id = 8;
    lvl7.nextLevels = [-2, -2, -2];


    this.levelNodes.push(lvl, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7);

    var end1 = <LevelNode>{};
    end1.id = -1;
    end1.nextLevels = [1];

    var end2 = <LevelNode>{};
    end2.id = -2;
    end2.nextLevels = [1];

    this.endings.push(end1, end2);
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
}
