import { AttributeType } from '@app/shared/character/characterAttribute';
import { throwError } from 'rxjs';

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
      break;
    case SkillType.Force:
      return AttributeType.Strength;
      break;
    case SkillType.Infiltration:
      return AttributeType.Agility;
      break;
    case SkillType.Manipulation:
      return AttributeType.Empathy;
      break;
    case SkillType.MeleeCombat:
      return AttributeType.Strength;
      break;
    case SkillType.Observation:
      return AttributeType.Wits;
      break;
    case SkillType.RangedCombat:
      return AttributeType.Agility;
      break;
    case SkillType.Survival:
      return AttributeType.Wits;
      break;
    case SkillType.Command:
      return AttributeType.Empathy;
      break;
    case SkillType.Culture:
      return AttributeType.Empathy;
      break;
    case SkillType.DataDjinn:
      return AttributeType.Wits;
      break;
    case SkillType.Medicurgy:
      return AttributeType.Wits;
      break;
    case SkillType.MysticalPowers:
      return AttributeType.Empathy;
      break;
    case SkillType.Pilot:
      return AttributeType.Agility;
      break;
    case SkillType.Science:
      return AttributeType.Wits;
      break;
    case SkillType.Technology:
      return AttributeType.Wits;
      break;
  }
}

export interface CharacterSkill {
  type: SkillType;
  value: number;
}
