import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { CharacterSkill, SkillType } from '@app/shared/character/characterSkill';
import { Dice } from '@app/shared/dice/dice';
import { CoriolisRoll } from '@app/shared/coriolis/roll';
import { ItemFeature, ItemFeatureType } from '@app/shared/item/itemFeatureType';
import { ItemArmor, ItemGadget, ItemRanges, ItemTechTier, ItemWeapon, ItemWeight } from '@app/shared/item/item';

describe('Character', () => {
  let testobject: Character;

  const testAttributes = [
    { type: AttributeType.Agility, value: 5 },
    { type: AttributeType.Wits, value: 3 },
    { type: AttributeType.Strength, value: 5 }
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
  const itemMeleeWeapon = new ItemWeapon({
    name: 'testMeleeWeapon',
    bonus: 3,
    blastPower: 0,
    weight: ItemWeight.normal,
    cost: 10,
    techTier: ItemTechTier.mysterious,
    range: ItemRanges.extreme,
    baseSkill: SkillType.MeleeCombat,
    features: [
      {
        name: 'meleeBonus',
        type: ItemFeatureType.custom,
        modifier: 42,
        skillTypeToBeModified: SkillType.MeleeCombat
      }
    ]
  });

  const testItems: Array<ItemWeapon | ItemGadget | ItemArmor> = [item1, itemMeleeWeapon];

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

  describe('rollItem', () => {
    beforeEach(() => {
      testobject = new Character({
        attributes: testAttributes,
        skills: testSkills,
        equipedItems: testItems
      });
    });

    it('should roll an attack', () => {
      const meleeWeapon = testobject.equipedItems.find(item => item.name === 'testMeleeWeapon');
      const skillTestResult: Dice[] = CoriolisRoll.rollItem(meleeWeapon, testobject);
      expect(skillTestResult).toBeTruthy();
      expect(skillTestResult.length).toEqual(13);
    });
  });
});
