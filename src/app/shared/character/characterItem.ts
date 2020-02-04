import { SkillType } from './characterSkill';

export interface CharacterItemSkillModifier {
  skillToBeModified: SkillType;
  modifierValue: number;
}

export interface CharacterItem {
  itemId: number;
  itemName: string;
  itemWeight: number;
  influenceToSkill: CharacterItemSkillModifier; // skill [SkillType, modifier]
}
