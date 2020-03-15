import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { CharacterSkill, SkillType } from '@app/shared/character/characterSkill';
import { Dice } from '@app/shared/dice/dice';
import { CoriolisRoll } from '@app/shared/coriolis/coriolisRoll';
import { ItemFeature, ItemFeatureType } from '@app/shared/item/itemFeature';
import {
  CharacterItem,
  ItemArmor,
  ItemGadget,
  ItemRanges,
  ItemTechTier,
  ItemWeapon,
  ItemWeight
} from '@app/shared/item/item';
import { BodyStatType, CharacterBodyStat } from '@app/shared/character/characterBodyStat';

describe('Character', () => {
  let testobject: Character;

  const testAttributes = [
    { type: AttributeType.Agility, value: 5 },
    { type: AttributeType.Wits, value: 3 },
    { type: AttributeType.Strength, value: 5 },
    { type: AttributeType.Empathy, value: 5 }
  ];
  const testSkills: CharacterSkill[] = [
    { type: SkillType.Dexterity, value: 5 },
    { type: SkillType.MeleeCombat, value: 5 },
    { type: SkillType.RangedCombat, value: 5 },
    { type: SkillType.Observation, value: 3 }
  ];
  const testFeatureObservation: ItemFeature = new ItemFeature({
    userQuestionAtUse: () => true,
    name: 'TestFeature',
    type: ItemFeatureType.custom,
    modifier: 10,
    skillTypeToBeModified: SkillType.Observation,
    defaultUserInput: true,
    askForUserInput: true
  });
  const item1 = new ItemGadget({
    name: 'testItem',
    amount: 1,
    features: [testFeatureObservation],
    baseSkill: SkillType.Observation
  });
  const testMeleeFeature = new ItemFeature({
    name: 'meleeBonus',
    type: ItemFeatureType.custom,
    modifier: 42,
    skillTypeToBeModified: SkillType.MeleeCombat
  });
  const itemMeleeWeapon = new ItemWeapon({
    name: 'testMeleeWeapon',
    bonus: 3,
    blastPower: 0,
    weight: ItemWeight.normal,
    cost: 10,
    techTier: ItemTechTier.mysterious,
    range: ItemRanges.extreme,
    baseSkill: SkillType.MeleeCombat,
    features: [testMeleeFeature]
  });
  const itemObservationGadget = new ItemGadget({
    name: 'testObservationGadget',
    baseSkill: SkillType.Observation,
    features: [testFeatureObservation]
  });
  const testItemArmor = new ItemArmor({
    name: 'testArmor'
  });
  const testEncumbaranceBodyStat: CharacterBodyStat = {
    type: BodyStatType.Encumbarance,
    value: {
      current: 0,
      minimum: 0,
      maximum: 0
    }
  };

  const testItems: Array<CharacterItem> = [item1, itemMeleeWeapon, itemObservationGadget, testItemArmor];

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      testobject = new Character();
      expect(testobject).toBeTruthy();
    });
  });

  describe('rollSkill', () => {
    beforeEach(() => {
      testobject = new Character({
        attributes: testAttributes,
        skills: testSkills,
        equipedItems: testItems
      });
    });

    it('should roll 10 dice from a defined skill and determine the amount of successes', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollSkill(SkillType.Dexterity, testobject, 0);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(10);
    });

    it('should roll 12 dice. 3 attribute, 3 skill, 10 item, 10 item = 26 dice', () => {
      const skillTestResult: Dice[] = CoriolisRoll.rollSkill(SkillType.Observation, testobject);
      expect(skillTestResult.length).toEqual(26);
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

  describe('rollItem', () => {
    beforeEach(() => {
      testobject = new Character({
        attributes: testAttributes,
        skills: testSkills,
        equipedItems: testItems
      });
    });

    it('should roll an attack with 5 str 5 melee 42 feature bonus and 3 weapon bonus', () => {
      const meleeWeapon = testobject.equipedItems.find(item => item.name === 'testMeleeWeapon');
      const skillTestResult: Dice[] = CoriolisRoll.rollItem(meleeWeapon, testobject);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(55);
    });

    it(
      'should roll a testItem Gadget observation + item with observation feature 10 + 10 and 3 wits ' +
        'and 3 observation',
      () => {
        const testItem = testobject.equipedItems.find(item => item.name === 'testObservationGadget');
        const skillTestResult: Dice[] = CoriolisRoll.rollItem(testItem, testobject);
        expect(skillTestResult).toBeTruthy();
        expect(skillTestResult.length).toEqual(26);
      }
    );

    it('should roll a testArmor with 0 dice, because there is no baseskill attached', () => {
      const testItem = testobject.equipedItems.find(item => item.name === 'testArmor');
      const skillTestResult: Dice[] = CoriolisRoll.rollItem(testItem, testobject);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(0);
    });
  });

  describe('calculate Encumbarance', () => {
    beforeEach(() => {
      testobject = new Character({
        attributes: testAttributes,
        skills: testSkills,
        equipedItems: testItems,
        bodyStats: [testEncumbaranceBodyStat]
      });
    });

    it('should calculate the general encumbarance', () => {
      const encumbaranceBodyStat = testobject.bodyStats.find(item => item.type === BodyStatType.Encumbarance);
      expect(encumbaranceBodyStat.value.current).toEqual(0);
      testobject.updateBodyStats();
      expect(encumbaranceBodyStat.value.current).toEqual(4);
    });
  });
});
