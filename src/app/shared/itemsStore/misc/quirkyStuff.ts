import { SkillType } from '@app/shared/character/characterSkill';
import { ItemGadget, ItemTechTier, ItemWeight } from '@app/shared/item/item';
import { v4 } from 'uuid';
import { ItemFeatureType } from '@app/shared/item/itemFeature';

const quantenFluxGenerator: ItemGadget = new ItemGadget({
  id: v4(),
  amount: 0,
  baseSkill: SkillType.MysticalPowers,
  cost: 0,
  techTier: ItemTechTier.mysterious,
  name: 'QuantenFluxGenerator',
  weight: ItemWeight.normal
  // skillToBeInfluenced: { skillToBeModified: SkillType.Technology, modifierValue: 42 }
});
const jostersLangerPenis: ItemGadget = new ItemGadget({
  id: v4(),
  name: 'JostersLangerPenis',
  weight: ItemWeight.notWearable,
  cost: 9001,
  baseSkill: SkillType.MeleeCombat,
  techTier: ItemTechTier.advanced,
  amount: 1,
  features: [
    {
      type: ItemFeatureType.custom,
      name: 'mitGrosserMachtKommtGrosseVerantwortung',
      modifier: 9001,
      skillTypeToBeModified: SkillType.MeleeCombat
    }
  ]
});

export const quirkyStuff = {
  quantenFluxGenerator,
  jostersLangerPenis
};
