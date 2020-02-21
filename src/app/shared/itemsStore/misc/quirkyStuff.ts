import { SkillType } from '@app/shared/character/characterSkill';

export const quirkyStuff = {
  quantenFluxGenerator: {
    id: 0,
    name: 'QuantenFluxGenerator',
    weight: -1,
    skillToBeInfluenced: { skillToBeModified: SkillType.Technology, modifierValue: 42 }
  },
  jostersLangerPenis: {
    id: 1,
    name: 'JostersLangerPenis',
    weight: 1000,
    skillToBeInfluenced: { skillToBeModified: SkillType.Command, modifierValue: 9001 }
  }
};
