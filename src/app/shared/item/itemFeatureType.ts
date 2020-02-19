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

export enum EffectedType {
  attribute = CharacterAttribute,
  skill,
  bodyStat,
  item
}

export interface ItemFeature {
  name: string;
  type: ItemFeatureType;
  userQuestionAtUse: UserInteractionFunction;
  effectAtUse: number;
  elementToBeEffected: ItemFeatureEffect;
}

export type UserInteractionFunction = () => boolean;
export type ItemFeatureEffect = (
  effectedPart: CharacterBodyStat | CharacterAttribute | CharacterSkill | CharacterItemBase,
  context: any
) => number;

const light: ItemFeature = {
  name: 'light',
  userQuestionAtUseon: () => {
    return false;
  },
  effectAtUse: 0.5,
  elementToBeEffected: ItemWeight
};

export const itemFeatures = {
  light
};
