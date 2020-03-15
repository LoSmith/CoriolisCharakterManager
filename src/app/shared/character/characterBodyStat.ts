export interface CharacterBodyStat {
  type: BodyStatType;
  value: DrainableStat;
}

export enum BodyStatType {
  Hitpoints = 'Hitpoints',
  Mindpoints = 'Mindpoints',
  Encumbarance = 'Encumbarance',
  RadiationPoints = 'RadiationPoints',
  Reputation = 'Reputation'
}

export interface DrainableStat {
  current: number;
  maximum: number;
  minimum?: number;
}
