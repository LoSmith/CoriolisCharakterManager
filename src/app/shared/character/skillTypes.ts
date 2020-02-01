import { AttributeTypes } from '@app/shared/character/attributeTypes';

export enum SkillTypes {
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
export function GetBaseAttributeTypeOfSkill(skill: SkillTypes): AttributeTypes {
  switch (skill) {
    case SkillTypes.Dexterity:
      return AttributeTypes.Agility;
      break;
    case SkillTypes.Force:
      return AttributeTypes.Strength;
      break;
    case SkillTypes.Infiltration:
      return AttributeTypes.Agility;
      break;
    case SkillTypes.Manipulation:
      return AttributeTypes.Empathy;
      break;
    case SkillTypes.MeleeCombat:
      return AttributeTypes.Strength;
      break;
    case SkillTypes.Observation:
      return AttributeTypes.Wits;
      break;
    case SkillTypes.RangedCombat:
      return AttributeTypes.Agility;
      break;
    case SkillTypes.Survival:
      return AttributeTypes.Wits;
      break;
    case SkillTypes.Command:
      return AttributeTypes.Empathy;
      break;
    case SkillTypes.Culture:
      return AttributeTypes.Empathy;
      break;
    case SkillTypes.DataDjinn:
      return AttributeTypes.Wits;
      break;
    case SkillTypes.Medicurgy:
      return AttributeTypes.Wits;
      break;
    case SkillTypes.MysticalPowers:
      return AttributeTypes.Empathy;
      break;
    case SkillTypes.Pilot:
      return AttributeTypes.Agility;
      break;
    case SkillTypes.Science:
      return AttributeTypes.Wits;
      break;
    case SkillTypes.Technology:
      return AttributeTypes.Wits;
      break;
  }
}
