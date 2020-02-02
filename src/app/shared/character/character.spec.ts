import { Character, CharacterBodyStatus, CharacterSkill } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/attributeType';
import { SkillType } from '@app/shared/character/skillType';
import { Dice } from '@app/shared/dice/dice';

describe('Character', () => {
  let testobject: Character;

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      testobject = new Character();
      expect(testobject).toBeTruthy();
    });

    it('creates a Character with a partial argument List', () => {
      testobject = new Character({
        name: 'test'
      });
      expect(testobject.name).toEqual('test');
    });
  });

  describe('Skills', () => {
    it('should create a character with a defined skill', () => {
      const testSkill: CharacterSkill = { type: SkillType.Command, value: 3 };
      testobject = new Character({
        skills: [testSkill, testSkill]
      });

      expect(testobject).toBeTruthy();
      expect(testobject.skills[0]).toEqual(testSkill);
    });
  });

  describe('Attribute', () => {
    it('should create a character with a defined attribute', () => {
      const testAttribute = { type: AttributeType.Agility, value: 1 };
      testobject = new Character({
        name: 'test',
        attributes: [testAttribute]
      });

      expect(testobject).toBeTruthy();
      expect(testobject.attributes[0]).toEqual(testAttribute);
    });

    it('should create a char with a empty array of attributes', () => {
      const testAttribute = { type: AttributeType.Agility, value: 1 };
      testobject = new Character({
        name: 'test',
        attributes: []
      });

      expect(testobject).toBeTruthy();
      expect(testobject.attributes[0]).toEqual(undefined);
    });
  });

  describe('BodyStatus', () => {
    it('should create a character with a defined BodyStatus', () => {
      const testBodyStatus = {
        hitpoints: { currentValue: 5, maximumValue: 10 }
      };
      testobject = new Character({
        name: 'test',
        bodyStatus: testBodyStatus
      });

      expect(testobject).toBeTruthy();
    });

    it('should create a character with a defined BodyStatus', () => {
      const testBodyStatus: CharacterBodyStatus = {
        hitpoints: { currentValue: 5, maximumValue: 10 },
        mindpoints: { currentValue: 5, maximumValue: 10 },
        armor: 10,
        encumbarance: { currentValue: 5, maximumValue: 10 },
        radiationPoints: { currentValue: 5, maximumValue: 10 },
        reputation: 120
      };
      testobject = new Character({
        name: 'test',
        bodyStatus: testBodyStatus
      });

      expect(testobject).toBeTruthy();
    });
  });

  describe('rollSkill', () => {
    const testAttribute = { type: AttributeType.Agility, value: 5 };
    const testSkill: CharacterSkill = { type: SkillType.Dexterity, value: 5 };

    beforeEach(() => {
      testobject = new Character({
        name: 'test',
        attributes: [testAttribute],
        skills: [testSkill]
      });
    });

    it('should roll 10 dice from a defined skill and determine the amount of successes', () => {
      const skillTestResult: Dice[] = testobject.rollSkill(SkillType.Dexterity, 0);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(10);
    });
  });

  describe('rollAttribute', () => {
    const testAttribute = { type: AttributeType.Agility, value: 5 };

    beforeEach(() => {
      testobject = new Character({
        name: 'test',
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
