import { ItemRanges, ItemTechTier, ItemWeapon } from '@app/shared/item/item';
import { v4 } from 'uuid';
import { ItemFeatureType } from '@app/shared/item/itemFeatureType';

const { light } = ItemFeatureType;
const knife: ItemWeapon = {
  name: 'Knife',
  id: v4(),
  bonus: 0,
  init: 1,
  damage: 2,
  crit: 2,
  range: ItemRanges.close,
  features: [],
  techTier: ItemTechTier.primitive,
  cost: 50,
  blastPower: 0
};
const sword: ItemWeapon = {
  crit: 0,
  damage: 0,
  id: '',
  name: 'sword',
  range: ItemRanges.close,
  techTier: ItemTechTier.primitive
};

export const melee = {
  // tslint:disable:max-line-length
  knife: knife,
  sword: sword
};

// 'knife': { name: 'Knife', id: v4(), bonus: 0, init: 1, damage: 2, crit: 2, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light ], techTier: ItemTechTier.primitive, cost: 50},
// 'sword': { name: 'Sword', id: v4(), bonus: 1, init: 0, damage: 2, crit: 2, range: ItemRanges.close, techTier: ItemTechTier.primitive, cost: 200},
// 'duraKnife': { name: 'Dura knife', id: v4(), bonus: 0, init: 1, damage: 2, crit: 1, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 500},
// 'duraSword': { name: 'Dura sword', id: v4(), bonus: 1, init: 0, damage: 2, crit: 1, range: ItemRanges.close, itemFeatures: [ ItemFeatures.heavy, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 1600},
// 'mercuriumKnife': { name: 'Mercurium knife', id: v4(), bonus: 1, init: 1, damage: 3, crit: 2, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.mercurium, ItemFeatures.cellPowered ], techTier: ItemTechTier.advanced, cost: 1500},
// 'mercuriumSword': { name: 'Mercurium sword', id: v4(), bonus: 2, init: 0, damage: 3, crit: 2, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.mercurium, ItemFeatures.cellPowered ], techTier: ItemTechTier.advanced, cost: 3000},
// 'axe': { name: 'Axe', id: v4(), bonus: 0, init: 0, damage: 3, crit: 2, range: ItemRanges.close, itemFeatures: [ ItemFeatures.heavy ], techTier: ItemTechTier.primitive, cost: 150},
// 'duraAxe': { name: 'Dura axe', id: v4(), bonus: 0, init: 0, damage: 3, crit: 1, range: ItemRanges.close, itemFeatures: [ ItemFeatures.heavy, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 2000},
// 'halberd': { name: 'Halberd', id: v4(), bonus: 0, init: 1, damage: 3, crit: 2, range: ItemRanges.close, itemFeatures: [ ItemFeatures.heavy, ItemFeatures.long ], techTier: ItemTechTier.primitive, cost: 300},
// 'duraHalberd': { name: 'Dura halberd', id: v4(), bonus: 0, init: 1, damage: 3, crit: 1, range: ItemRanges.close, itemFeatures: [ ItemFeatures.heavy, ItemFeatures.long, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 2500},
// 'baton': { name: 'Baton', id: v4(), bonus: 2, init: 0, damage: 1, crit: 3, range: ItemRanges.close, techTier: ItemTechTier.primitive, cost: 100},
// 'staff': { name: 'Staff', id: v4(), bonus: 1, init: 2, damage: 1, crit: 3, range: ItemRanges.close, techTier: ItemTechTier.primitive, cost: 50},
// 'mace': { name: 'Mace', id: v4(), bonus: 0, init: 0, damage: 3, crit: 3, range: ItemRanges.close, itemFeatures: [ ItemFeatures.heavy ], techTier: ItemTechTier.primitive, cost: 100},
// 'powerSledge': { name: 'Power sledge', id: v4(), bonus: 0, init: 0, damage: 4, crit: 3, range: ItemRanges.close, itemFeatures: [ ItemFeatures.heavy, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 1000},
// 'powerGlove': { name: 'Power glove', id: v4(), bonus: 1, init: 1, damage: 2, crit: 3, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.small, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 1500},
// 'shockStick': { name: 'Shock stick', id: v4(), bonus: 2, init: 0, damage: 1, crit: 0, range: ItemRanges.close, itemFeatures: [ ItemFeatures.stun, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 500},
// 'shockWhip': { name: 'Shock whip', id: v4(), bonus: 0, init: 2, damage: 1, crit: 0, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.small, ItemFeatures.flexible, ItemFeatures.stun, ItemFeatures.cellPowered ], techTier: ItemTechTier.ordinary, cost: 800},
// 'energyStaff': { name: 'Energy staff', id: v4(), bonus: 2, init: 2, damage: 2, crit: 3, range: ItemRanges.close, itemFeatures: [ ItemFeatures.stun, ItemFeatures.heavy, ItemFeatures.cellPowered ], techTier: ItemTechTier.advanced, cost: 1000},
// 'energyStick': { name: 'Energy stick', id: v4(), bonus: 2, init: 0, damage: 2, crit: 3, range: ItemRanges.close, itemFeatures: [ ItemFeatures.stun, ItemFeatures.cellPowered ], techTier: ItemTechTier.advanced, cost: 1200},
// 'energyWhip': { name: 'Energy whip', id: v4(), bonus: 0, init: 2, damage: 2, crit: 3, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.small, ItemFeatures.flexible, ItemFeatures.stun, ItemFeatures.cellPowered ], techTier: ItemTechTier.advanced, cost: 1800},
// 'handFan': { name: 'Hand fan', id: v4(), bonus: 1, init: 2, damage: 2, crit: 1, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.small, ItemFeatures.cellPowered ], techTier: ItemTechTier.advanced, cost: 2500},
// 'unarmed': { name: 'Unarmed', id: v4(), bonus: 0, init: 2, damage: 1, crit: 3, range: ItemRanges.close, techTier: ItemTechTier.primitive, cost: 0},
// 'brassKnuckles': { name: 'Brass knuckles', id: v4(), bonus: 0, init: 2, damage: 2, crit: 3, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.small ], techTier: ItemTechTier.primitive, cost: 50},
// 'claws': { name: 'Claws', id: v4(), bonus: 0, init: 2, damage: 1, crit: 2, range: ItemRanges.close, techTier: ItemTechTier.primitive, cost: 0},
// 'duraClaws': { name: 'Dura claws', id: v4(), bonus: 0, init: 2, damage: 1, crit: 1, range: ItemRanges.close, itemFeatures: [ ItemFeatures.light, ItemFeatures.small ], techTier: ItemTechTier.ordinary, cost: 600},
// 'spear': { name: 'Spear', id: v4(), bonus: 1, init: 2, damage: 2, crit: 2, range: ItemRanges.close, itemFeatures: [ ItemFeatures.long ], techTier: ItemTechTier.primitive, cost: 200},
// 'whip': { name: 'Whip', id: v4(), bonus: 0, init: 2, damage: 1, crit: 4, range: ItemRanges.close, itemFeatures: [ ItemFeatures.flexible ], techTier: ItemTechTier.primitive, cost: 50},
