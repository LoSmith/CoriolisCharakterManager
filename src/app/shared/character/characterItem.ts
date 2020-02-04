import { SkillType } from './characterSkill';

export interface CharacterItemSkillModifier {
  skillToBeModified: SkillType;
  modifierValue: number;
}

export interface CharacterItem {
  id: number;
  name: string;
  weight: number;
  influenceToSkill: CharacterItemSkillModifier; // skill [SkillType, modifier]
}
