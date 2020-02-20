import { SkillType } from '@app/shared/character/characterSkill';

export enum UserQuestionDefaultResponse {
  alwaysTrue,
  alwaysFalse,
  alwaysAsk
}

export enum ItemFeatureType {
  light,
  heavy,
  bulky,
  small,
  long,
  reliable,
  cellPowered,
  mercurium,
  flexible,
  stun,
  slow,
  antiVehicle,
  thermalSweep,
  highCapacity,
  armorPiercing,
  blocksVisionAndSensors,
  singleShot,
  fire1,
  fire2,
  fire3,
  fire4,
  fire5,
  fire6,
  blastPower1,
  blastPower2,
  blastPower3,
  blastPower4,
  blastPower5,
  blastPower6,
  automaticFire,
  silent,
  buildInGrenadeLauncher,
  nightSights,
  thermostaticSuit,
  vacuumSuit,
  oxygenSupply,
  reinforcedExoServos,
  custom
}

export function getDefaultUserQuestionResponse(feature: ItemFeature) {
  let result: boolean;
  if (feature.userQuestionDefaultResponse === UserQuestionDefaultResponse.alwaysTrue) {
    result = true;
  } else if (feature.userQuestionDefaultResponse === UserQuestionDefaultResponse.alwaysFalse) {
    result = false;
  }
  return result;
}

export class ItemFeature {
  name: string;
  type: ItemFeatureType;
  modifier: number;
  skillTypeToBeModified: SkillType;
  userQuestionDefaultResponse: UserQuestionDefaultResponse;
  userQuestionAtUse: UserInteractionFunctionType;

  public constructor(init?: Partial<ItemFeature>) {
    Object.assign(this, init);
  }
}

export type UserInteractionFunctionType = () => boolean;
// export const light: ItemFeature = {
//   name: 'Light',
//   modifier: 0.5,
//   type: ItemFeatureType.light,
//   userQuestionAtUse: () => true
// };
