import { ItemArmor, CharacterItemBase, ItemWeapon, ItemWeight } from '@app/shared/item/item';
import { CharacterSkill, SkillType } from '@app/shared/character/characterSkill';
import { CharacterBodyStat } from '@app/shared/character/characterBodyStat';
import { CharacterAttribute } from '@app/shared/character/characterAttribute';

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
  reinforcedExoServos
}

export class ItemFeature {
  name: string;
  type?: ItemFeatureType;
  modifier = 0;
  skillTypeToBeModified?: SkillType;
  userQuestionDefaultResponse?: UserQuestionDefaultResponse;

  public constructor(init?: Partial<ItemFeature>) {
    Object.assign(this, init);
  }

  userQuestionAtUse: UserInteractionFunction = () => true;
  getDefaultResult?: () => boolean = () => {
    let isUsableDialogResult = false;
    if (this.userQuestionDefaultResponse === UserQuestionDefaultResponse.alwaysTrue) {
      isUsableDialogResult = true;
    }
    if (this.userQuestionDefaultResponse === UserQuestionDefaultResponse.alwaysTrue) {
      isUsableDialogResult = false;
    }
    return isUsableDialogResult;
  };
}

export enum UserQuestionDefaultResponse {
  alwaysTrue,
  alwaysFalse,
  alwaysAsk
}

export type UserInteractionFunction = () => boolean;

const light: ItemFeature = {
  name: 'Light',
  modifier: 0.5,
  type: ItemFeatureType.light,
  userQuestionAtUse: () => true
};

export const itemFeatures = {
  light
};
