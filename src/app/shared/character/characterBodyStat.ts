const FormularExplanation = {
  hitpoints: 'Strength + Agility',
  mindpoints: 'Wits + Empathy',
  encumbarance: 'Strength * 2',
  radiationPoints: 'Starts with 0',
  reputation: 'something'
};

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
  maximum?: number;
  minimum: number;
}

export function getFormulaExplanation(bodyStatType: BodyStatType): string {
  switch (bodyStatType) {
    case BodyStatType.Hitpoints:
      return FormularExplanation.hitpoints;
    case BodyStatType.Mindpoints:
      return FormularExplanation.mindpoints;
    case BodyStatType.Encumbarance:
      return FormularExplanation.encumbarance;
    case BodyStatType.RadiationPoints:
      return FormularExplanation.radiationPoints;
    case BodyStatType.Reputation:
      return FormularExplanation.reputation;
    default:
      throw new Error('invalid bodystattype');
  }
}
