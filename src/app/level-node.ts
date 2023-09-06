export interface LevelNode {
  id: number;
  nextPossibleLevels: LEVELS[];
  name: string;
  background: string;
}

export enum LEVELS {
  START_PAGE = 0,
  ARMY_BASE = 2,
  WORK_OR_TRIP = 5,
  END_DEFAULT= -1,
  CRIMINAL = 6,
  CLOTHES_SHOP = 4,
  ISRAEL_TRAIL = 7,
  COINS = 8,
  BARTENDER = 9,
  SHARKS = 10,
  CHOOSE_HOLIDAY = 11
}
