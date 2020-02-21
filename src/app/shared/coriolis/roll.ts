import { CharacterSkill, GetBaseAttributeTypeOfSkill, SkillType } from '@app/shared/character/characterSkill';
import { Character } from '@app/shared/character/character';
import { Dice } from '@app/shared/dice/dice';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { CharacterItem, ItemArmor, ItemClassName, ItemGadget, ItemWeapon } from '@app/shared/item/item';
import _ = require('lodash');

export class CoriolisRoll {
  static countNumberOfDiceForArmorRoll(item: ItemArmor, character: Character) {
    let result = 0;
    result += this.countNumberOfDiceForSkill(item.baseSkill, character);
    return result;
  }

  static countNumberOfDiceForWeaponRoll(item: ItemWeapon, character: Character) {
    let result = 0;
    result += this.countNumberOfDiceForSkill(item.baseSkill, character);
    result += item.bonus;
    return result;
  }

  static countNumberOfDiceForGadgetRoll(item: ItemGadget, character: Character) {
    let result = 0;
    result += this.countNumberOfDiceForSkill(item.baseSkill, character);
    return result;
  }

  /**
   * counts the number of dice we can use for the itemroll
   */
  static countNumberOfDiceForItemRoll(item: CharacterItem, character: Character) {
    let result = 0;

    switch (item.getItemClassType()) {
      case ItemClassName.ItemArmor:
        result = CoriolisRoll.countNumberOfDiceForArmorRoll(item as ItemArmor, character);
        break;

      case ItemClassName.ItemWeapon:
        result = CoriolisRoll.countNumberOfDiceForWeaponRoll(item as ItemWeapon, character);
        break;

      case ItemClassName.ItemGadget:
        result = CoriolisRoll.countNumberOfDiceForGadgetRoll(item as ItemGadget, character);
        break;

      default:
        throw Error('Invalid ItemClass');
    }

    return result;
  }

  /**
   * rolls an amound of dice equal to skill + baseattribute + itemModifier + TalentModifier
   * @param skill to roll
   * @param character to supply the fields
   */
  static countNumberOfDiceForSkill(skill: SkillType, character: Character): number {
    const usedSkill: CharacterSkill = character.skills.find(item => item.type === skill);
    const skillValue = usedSkill.value;

    const baseAttributeToUse: AttributeType = GetBaseAttributeTypeOfSkill(skill);
    const baseAttributeValue = CoriolisRoll.countAvailableDiceForAttribute(baseAttributeToUse, character);
    const itemModifierValue = CoriolisRoll.countItemModifierForSkill(skill, character);
    const talentModifierValue = CoriolisRoll.countTalentBonusForSkill(skill, character);

    return skillValue + baseAttributeValue + itemModifierValue + talentModifierValue;
  }

  static countItemModifierForSkill(skill: SkillType, character: Character): number {
    let itemBonusDice = 0;
    if (_.isNil(character.equipedItems)) {
      return itemBonusDice;
    }

    // info: if we roll a specific weapon, we use the rollItem method instead of roll melee or ranged
    for (const item of character.equipedItems) {
      for (const featureOfItem of item.features) {
        if (featureOfItem.skillTypeToBeModified === skill) {
          // if this skill modifies our skilltype
          let isFeatureApplicable = false;
          if (featureOfItem.askForUserInput) {
            isFeatureApplicable = featureOfItem.userQuestionAtUse();
          } else {
            isFeatureApplicable = featureOfItem.defaultUserInput;
          }

          if (isFeatureApplicable) {
            itemBonusDice = itemBonusDice + item.amount * featureOfItem.modifier;
          }
        }
      }
    }
    return itemBonusDice;
  }

  static countAvailableDiceForAttribute(attributeType: AttributeType, character: Character): number {
    const attribute = character.attributes.find(item => item.type === attributeType);
    return attribute.value;
  }

  static countTalentBonusForSkill(skill: SkillType, character: Character): number {
    const talentBonusDice = 0;
    return talentBonusDice;
  }
  /**
   * rolls a number of dice and returns the dice array
   * @param numberOfDiceToRoll the amount of dice to roll
   */
  static rollNumberOfDice(numberOfDiceToRoll: number): Dice[] {
    const dice: Dice[] = [];
    for (let i = 0; i < numberOfDiceToRoll; i++) {
      dice[i] = new Dice().roll();
    }
    return dice;
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skill - the skilltype to roll
   * @param character the Character which provides stats
   * @param manualModifications - manual modifications for the roll
   */
  static rollSkill(skill: SkillType, character: Character, manualModifications: number = 0): Dice[] {
    const numberOfDiceToRoll = CoriolisRoll.countNumberOfDiceForSkill(skill, character) + manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  /**
   * rolls a single attribute and returns the successes and the dices
   * @param attribute - attribute to use
   * @param character which provides attributes
   * @param manualModifications - manual modifications for the roll
   */
  static rollAttribute(attribute: AttributeType, character: Character, manualModifications: number = 0): Dice[] {
    const numberOfDiceToRoll = CoriolisRoll.countAvailableDiceForAttribute(attribute, character) + manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param item to be used for the roll
   * @param character the Character which provides stats
   * @param manualModifications - manual modifications for the roll
   */
  static rollItem(item: CharacterItem, character: Character, manualModifications: number = 0): Dice[] {
    const numberOfDiceToRoll = CoriolisRoll.countNumberOfDiceForItemRoll(item, character) + manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }
}
