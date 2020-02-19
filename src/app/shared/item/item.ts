import { ItemFeature, ItemFeatureType } from '@app/shared/item/itemFeatureType';

export enum ItemRanges {
  close = -2, // -2 modifier
  short = 0, // 0 modifier
  long = 2, // +2 modifier
  extreme = 4 // +4 modifier
}

export enum ItemTechTier {
  primitive, // tech brought by firstcome or adapted local
  ordinary, // tech used by ordinary folk
  advanced, // high end of the tech available on the open
  mysterious, // icon stuff
  faction, // faction only tech
  artifact // portal builders remaining tech
}

export enum ItemWeight {
  tiny = 0, // 0 size
  light = 0.5, // 0.5 size
  normal = 1, // 1 size
  heavy = 2, // 2 size
  notWearable = 9001 // too heavy to wear
}

/////////////////////// ITEM INTERFACES ////////////////////////////////////////
export class CharacterItemBase {
  id?: string;
  name?: string;
  techTier?: ItemTechTier;
  cost? = 0;
  features?: Array<ItemFeature> = [];
  weight?: ItemWeight = 1;
  amount?: number;

  constructor(init?: Partial<CharacterItemBase>) {
    Object.assign(this, init);
  }
}

export class ItemWeapon extends CharacterItemBase {
  bonus? = 0;
  init? = 0;
  blastPower? = 0;
  damage: number;
  crit: number;
  range: ItemRanges;

  constructor(init?: Partial<ItemWeapon>) {
    super(init);
    Object.assign(this, init);
  }
}

export class ItemArmor extends CharacterItemBase {
  armorRating: number;
  extraFeaturesSlots? = 0;

  constructor(init?: Partial<ItemArmor>) {
    super(init);
    Object.assign(this, init);
  }
}