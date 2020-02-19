export interface CharacterBodyStat {
  type: BodyStatType;
  value: DrainableStat;
}

export enum BodyStatType {
  Hitpoints,
  Mindpoints,
  Encumbarance,
  RadiationPoints,
  Reputation
}

export interface DrainableStat {
  current: number;
  maximum: number;
  minimum?: number;
}
