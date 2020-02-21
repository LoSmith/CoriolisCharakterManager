import { AttributeType } from '@app/shared/character/characterAttribute';

export interface CharacterSkill {
  type: SkillType;
  value: number;
}

export enum SkillType {
  Dexterity = 'Dexterity',
  Force = 'Force',
  Infiltration = 'Infiltration',
  Manipulation = 'Manipulation',
  MeleeCombat = 'MeleeCombat',
  Observation = 'Observation',
  RangedCombat = 'RangedCombat',
  Survival = 'Survival',
  Command = 'Command',
  Culture = 'Culture',
  DataDjinn = 'DataDjinn',
  Medicurgy = 'Medicurgy',
  MysticalPowers = 'MysticalPowers',
  Pilot = 'Pilot',
  Science = 'Science',
  Technology = 'Technology'
}

/**
 * Returns the BaseAttributeType of a Skill
 * @param skill- the skill you want to convert
 */
export function GetBaseAttributeTypeOfSkill(skill: SkillType): AttributeType {
  switch (skill) {
    case SkillType.Dexterity:
      return AttributeType.Agility;
    case SkillType.Force:
      return AttributeType.Strength;
    case SkillType.Infiltration:
      return AttributeType.Agility;
    case SkillType.Manipulation:
      return AttributeType.Empathy;
    case SkillType.MeleeCombat:
      return AttributeType.Strength;
    case SkillType.Observation:
      return AttributeType.Wits;
    case SkillType.RangedCombat:
      return AttributeType.Agility;
    case SkillType.Survival:
      return AttributeType.Wits;
    case SkillType.Command:
      return AttributeType.Empathy;
    case SkillType.Culture:
      return AttributeType.Empathy;
    case SkillType.DataDjinn:
      return AttributeType.Wits;
    case SkillType.Medicurgy:
      return AttributeType.Wits;
    case SkillType.MysticalPowers:
      return AttributeType.Empathy;
    case SkillType.Pilot:
      return AttributeType.Agility;
    case SkillType.Science:
      return AttributeType.Wits;
    case SkillType.Technology:
      return AttributeType.Wits;
    default:
      throw new Error('Invalid Input Skill');
  }
}
