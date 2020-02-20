import { SkillType } from '@app/shared/character/characterSkill';

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

export class ItemFeature {
  name: string;
  type?: ItemFeatureType;
  modifier = 0;
  skillTypeToBeModified?: SkillType;
  userQuestionDefaultResponse: UserQuestionDefaultResponse;

  public constructor(init?: Partial<ItemFeature>) {
    Object.assign(this, init);
  }

  userQuestionAtUse?: UserInteractionFunctionType = () => true;
  getDefaultUserQuestionResponse: GetDefaultResultFunctionType = () => {
    let result = false;
    if (this.userQuestionDefaultResponse === UserQuestionDefaultResponse.alwaysTrue) {
      result = true;
    }
    if (this.userQuestionDefaultResponse === UserQuestionDefaultResponse.alwaysTrue) {
      result = false;
    }
    return result;
  };
}

export enum UserQuestionDefaultResponse {
  alwaysTrue,
  alwaysFalse,
  alwaysAsk
}

export type UserInteractionFunctionType = () => boolean;
export type GetDefaultResultFunctionType = () => boolean;
export const light: ItemFeature = {
  name: 'Light',
  modifier: 0.5,
  type: ItemFeatureType.light,
  userQuestionAtUse: () => true
};
