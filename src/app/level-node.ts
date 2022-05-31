export interface LevelNode {
  id: number;
  nextLevels: LEVELS[];
  name: string;
}

export enum LEVELS {
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
