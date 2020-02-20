import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { CharacterSkill, SkillType } from '@app/shared/character/characterSkill';
import { Dice } from '@app/shared/dice/dice';
import { CoriolisRoll } from '@app/shared/coriolis/roll';
import { ItemFeature, ItemFeatureType, UserQuestionDefaultResponse } from '@app/shared/item/itemFeatureType';

describe('Character', () => {
  let testobject: Character;

  const testAttributes = [
    { type: AttributeType.Agility, value: 5 },
    { type: AttributeType.Wits, value: 3 }
  ];
  const testSkills: CharacterSkill[] = [
    { type: SkillType.Dexterity, value: 5 },
    { type: SkillType.Observation, value: 3 }
  ];
  const testFeatureObservation: ItemFeature = {
    userQuestionDefaultResponse: UserQuestionDefaultResponse.alwaysTrue,
    name: 'TestFeature',
    type: ItemFeatureType.custom,
    modifier: 10,
    skillTypeToBeModified: SkillType.Observation
  };

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      testobject = new Character();
      expect(testobject).toBeTruthy();
    });
  });

  describe('rollSkill', () => {
    beforeEach(() => {
      testobject = new Character({
        equipedItems: [
          {
            id: 'testItem',
            amount: 1,
            features: [testFeatureObservation]
          }
        ],
        attributes: testAttributes,
        skills: testSkills
      });
    });

    it('should roll 10 dice from a defined skill and determine the amount of successes', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollSkill(SkillType.Dexterity, testobject, 0);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(10);
    });

    it('should roll 12 dice. 3 attribute, 3 skill, 10 item = 16 dice', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollSkill(SkillType.Observation, testobject);
      expect(skillTestResult.length).toEqual(16);
    });
  });

  describe('rollAttribute', () => {
    const testAttribute = { type: AttributeType.Agility, value: 5 };

    beforeEach(() => {
      testobject = new Character({
        attributes: [testAttribute]
      });
    });

    it('should roll a attribute and return the amound of successes and the dice rolled', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollAttribute(AttributeType.Agility, testobject);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(5);
    });
  });
});
