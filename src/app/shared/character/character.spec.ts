import { Character, CharacterSkill } from '@app/shared/character/character';
import { AttributeTypes } from '@app/shared/character/attributeTypes';
import { SkillTypes } from '@app/shared/character/skillTypes';
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
      const testSkill: CharacterSkill = { type: SkillTypes.Command, value: 3 };
      testobject = new Character({
        skills: [testSkill, testSkill]
      });

      expect(testobject).toBeTruthy();
      expect(testobject.skills[0]).toEqual(testSkill);
    });
  });

  describe('Attribute', () => {
    it('should create a character with a defined attribute', () => {
      const testAttribute = { type: AttributeTypes.Agility, value: 1 };
      testobject = new Character({
        name: 'test',
        attributes: [testAttribute]
      });

      expect(testobject).toBeTruthy();
      expect(testobject.attributes[0]).toEqual(testAttribute);
    });

    it('should create a char with a empty array of attributes', function() {
      const testAttribute = { type: AttributeTypes.Agility, value: 1 };
      testobject = new Character({
        name: 'test',
        attributes: []
      });

      expect(testobject).toBeTruthy();
      expect(testobject.attributes[0]).toEqual(undefined);
    });
  });

  describe('rollSkill', () => {
    const testAttribute = { type: AttributeTypes.Agility, value: 1 };
    const testSkill: CharacterSkill = { type: SkillTypes.Dexterity, value: 3 };

    beforeEach(() => {
      testobject = new Character({
        name: 'test',
        attributes: [testAttribute],
        skills: [testSkill]
      });
    });

    it('should roll a defined skill and determine the amount of successes', () => {
      const skillTestResult: [number, Dice[]] = testobject.rollSkill(SkillTypes.Dexterity);
      expect(skillTestResult).toBeTruthy();
    });
  });
});
