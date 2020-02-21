import { ItemRanges, ItemTechTier, ItemWeapon, ItemWeight } from '@app/shared/item/item';
import { v4 } from 'uuid';
import { SkillType } from '@app/shared/character/characterSkill';

const knife: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Knife',
  id: v4(),
  baseSkill: SkillType.MeleeCombat,
  bonus: 0,
  init: 1,
  damage: 2,
  crit: 2,
  range: ItemRanges.close,
  features: [],
  techTier: ItemTechTier.primitive,
  cost: 50,
  blastPower: 0
});
const sword: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  crit: 0,
  damage: 0,
  id: '',
  name: 'sword',
  range: ItemRanges.close,
  techTier: ItemTechTier.primitive,
  baseSkill: SkillType.MeleeCombat
});

const duraKnife: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Dura knife',
  id: v4(),
  bonus: 0,
  init: 1,
  damage: 2,
  crit: 1,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  baseSkill: SkillType.MeleeCombat
});
const duraSword: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Dura sword',
  id: v4(),
  bonus: 1,
  init: 0,
  damage: 2,
  crit: 1,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.heavy, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 1600,
  baseSkill: SkillType.MeleeCombat
});
const mercuriumKnife: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Mercurium knife',
  id: v4(),
  bonus: 1,
  init: 1,
  damage: 3,
  crit: 2,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.mercurium, ItemFeatures.cellPowered],
  techTier: ItemTechTier.advanced,
  cost: 1500,
  baseSkill: SkillType.MeleeCombat
});
const mercuriumSword: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Mercurium sword',
  id: v4(),
  bonus: 2,
  init: 0,
  damage: 3,
  crit: 2,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.mercurium, ItemFeatures.cellPowered],
  techTier: ItemTechTier.advanced,
  cost: 3000,
  baseSkill: SkillType.MeleeCombat
});
const axe: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Axe',
  id: v4(),
  bonus: 0,
  init: 0,
  damage: 3,
  crit: 2,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.heavy],
  techTier: ItemTechTier.primitive,
  cost: 150,
  baseSkill: SkillType.MeleeCombat
});
const duraAxe: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Dura axe',
  id: v4(),
  bonus: 0,
  init: 0,
  damage: 3,
  crit: 1,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.heavy, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 2000,
  baseSkill: SkillType.MeleeCombat
});
const halberd: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Halberd',
  id: v4(),
  bonus: 0,
  init: 1,
  damage: 3,
  crit: 2,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.heavy, ItemFeatures.long],
  techTier: ItemTechTier.primitive,
  cost: 300,
  baseSkill: SkillType.MeleeCombat
});
const duraHalberd: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Dura halberd',
  id: v4(),
  bonus: 0,
  init: 1,
  damage: 3,
  crit: 1,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.heavy, ItemFeatures.long, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 2500,
  baseSkill: SkillType.MeleeCombat
});
const baton: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Baton',
  id: v4(),
  bonus: 2,
  init: 0,
  damage: 1,
  crit: 3,
  range: ItemRanges.close,
  techTier: ItemTechTier.primitive,
  cost: 100,
  baseSkill: SkillType.MeleeCombat
});
const staff: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Staff',
  id: v4(),
  bonus: 1,
  init: 2,
  damage: 1,
  crit: 3,
  range: ItemRanges.close,
  techTier: ItemTechTier.primitive,
  cost: 50,
  baseSkill: SkillType.MeleeCombat
});
const mace: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Mace',
  id: v4(),
  bonus: 0,
  init: 0,
  damage: 3,
  crit: 3,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.heavy],
  techTier: ItemTechTier.primitive,
  cost: 100,
  baseSkill: SkillType.MeleeCombat
});
const powerSledge: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Power sledge',
  id: v4(),
  bonus: 0,
  init: 0,
  damage: 4,
  crit: 3,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.heavy, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 1000,
  baseSkill: SkillType.MeleeCombat
});
const powerGlove: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Power glove',
  id: v4(),
  bonus: 1,
  init: 1,
  damage: 2,
  crit: 3,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.small, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 1500,
  baseSkill: SkillType.MeleeCombat
});
const shockStick: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Shock stick',
  id: v4(),
  bonus: 2,
  init: 0,
  damage: 1,
  crit: 0,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.stun, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 500,
  baseSkill: SkillType.MeleeCombat
});
const shockWhip: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Shock whip',
  id: v4(),
  bonus: 0,
  init: 2,
  damage: 1,
  crit: 0,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.small, ItemFeatures.flexible, ItemFeatures.stun, ItemFeatures.cellPowered],
  techTier: ItemTechTier.ordinary,
  cost: 800,
  baseSkill: SkillType.MeleeCombat
});
const energyStaff: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Energy staff',
  id: v4(),
  bonus: 2,
  init: 2,
  damage: 2,
  crit: 3,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.stun, ItemFeatures.heavy, ItemFeatures.cellPowered],
  techTier: ItemTechTier.advanced,
  cost: 1000,
  baseSkill: SkillType.MeleeCombat
});
const energyStick: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Energy stick',
  id: v4(),
  bonus: 2,
  init: 0,
  damage: 2,
  crit: 3,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.stun, ItemFeatures.cellPowered],
  techTier: ItemTechTier.advanced,
  cost: 1200,
  baseSkill: SkillType.MeleeCombat
});
const energyWhip: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Energy whip',
  id: v4(),
  bonus: 0,
  init: 2,
  damage: 2,
  crit: 3,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.small, ItemFeatures.flexible, ItemFeatures.stun, ItemFeatures.cellPowered],
  techTier: ItemTechTier.advanced,
  cost: 1800,
  baseSkill: SkillType.MeleeCombat
});
const handFan: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Hand fan',
  id: v4(),
  bonus: 1,
  init: 2,
  damage: 2,
  crit: 1,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.small, ItemFeatures.cellPowered],
  techTier: ItemTechTier.advanced,
  cost: 2500,
  baseSkill: SkillType.MeleeCombat
});
const unarmed: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Unarmed',
  id: v4(),
  bonus: 0,
  init: 2,
  damage: 1,
  crit: 3,
  range: ItemRanges.close,
  techTier: ItemTechTier.primitive,
  cost: 0,
  baseSkill: SkillType.MeleeCombat
});
const brassKnuckles: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Brass knuckles',
  id: v4(),
  bonus: 0,
  init: 2,
  damage: 2,
  crit: 3,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.small],
  techTier: ItemTechTier.primitive,
  cost: 50,
  baseSkill: SkillType.MeleeCombat
});
const claws: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Claws',
  id: v4(),
  bonus: 0,
  init: 2,
  damage: 1,
  crit: 2,
  range: ItemRanges.close,
  techTier: ItemTechTier.primitive,
  cost: 0,
  baseSkill: SkillType.MeleeCombat
});
const duraClaws: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Dura claws',
  id: v4(),
  bonus: 0,
  init: 2,
  damage: 1,
  crit: 1,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.light, ItemFeatures.small],
  techTier: ItemTechTier.ordinary,
  cost: 600,
  baseSkill: SkillType.MeleeCombat
});
const spear: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Spear',
  id: v4(),
  bonus: 1,
  init: 2,
  damage: 2,
  crit: 2,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.long],
  techTier: ItemTechTier.primitive,
  cost: 200,
  baseSkill: SkillType.MeleeCombat
});
const whip: ItemWeapon = new ItemWeapon({
  weight: ItemWeight.normal,
  name: 'Whip',
  id: v4(),
  bonus: 0,
  init: 2,
  damage: 1,
  crit: 4,
  range: ItemRanges.close,
  // itemFeatures: [ItemFeatures.flexible],
  techTier: ItemTechTier.primitive,
  cost: 50,
  baseSkill: SkillType.MeleeCombat
});

export const melee = {
  knife,
  sword,
  duraKnife,
  duraSword,
  mercuriumKnife,
  mercuriumSword,
  axe,
  duraAxe,
  halberd,
  duraHalberd,
  baton,
  staff,
  mace,
  powerSledge,
  powerGlove,
  shockStick,
  shockWhip,
  energyStaff,
  energyStick,
  energyWhip,
  handFan,
  unarmed,
  brassKnuckles,
  claws,
  duraClaws,
  spear,
  whip
};
