import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { CharacterSkill, SkillType } from '@app/shared/character/characterSkill';
import { Dice } from '@app/shared/dice/dice';
import { ItemFeature } from '@app/shared/item/itemFeatureType';

describe('Character', () => {
  let testobject: Character;

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      testobject = new Character();
      expect(testobject).toBeTruthy();
    });
  });

  describe('rollSkill', () => {
    const testAttribute = { type: AttributeType.Agility, value: 5 };
    const testSkill: CharacterSkill = { type: SkillType.Dexterity, value: 5 };
    beforeEach(() => {
      testobject = new Character({
        equipedItems: [
          {
            name: 'Observation Improver'
          }
        ],
        attributes: [testAttribute],
        skills: [testSkill]
      });
    });

    it('should roll 10 dice from a defined skill and determine the amount of successes', () => {
      const skillTestResult: Dice[] = testobject.rollSkill(SkillType.Dexterity, 0);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(10);
    });

    it('should roll 12 dice. 5 attribute, 5 skill, 2 item = 12 dice', function() {
      const skillTestResult: Dice[] = testobject.rollSkill(SkillType.Observation);
      expect(skillTestResult.length).toEqual(12);
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
      const skillTestResult: Dice[] = testobject.rollAttribute(AttributeType.Agility, 5);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(10);
    });
  });
});
