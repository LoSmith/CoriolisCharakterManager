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
export type UserInteractionFunctionType = () => boolean;

export class ItemFeature {
  name: string;
  type: ItemFeatureType;
  modifier: number;
  skillTypeToBeModified: SkillType;
  defaultUserInput? = true;
  askForUserInput? = false;

  public constructor(init?: Partial<ItemFeature>) {
    Object.assign(this, init);
  }

  userQuestionAtUse?: UserInteractionFunctionType = () => true;
}
export const light: ItemFeature = {
  skillTypeToBeModified: undefined,
  name: 'Light',
  modifier: 0.5,
  type: ItemFeatureType.light,
  userQuestionAtUse: () => true
};
