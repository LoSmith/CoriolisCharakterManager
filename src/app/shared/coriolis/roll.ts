import { CharacterSkill, GetBaseAttributeTypeOfSkill, SkillType } from '@app/shared/character/characterSkill';
import { Character } from '@app/shared/character/character';
import { Dice } from '@app/shared/dice/dice';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { UserQuestionDefaultResponse } from '@app/shared/item/itemFeatureType';

export class CoriolisRoll {
  /**
   * rolls a number of dice and returns the dice array
   * @param numberOfDiceToRoll the amount of dice to roll
   */
  private static rollNumberOfDice(numberOfDiceToRoll: number): Dice[] {
    const dice: Dice[] = [];
    for (let i = 0; i < numberOfDiceToRoll; i++) {
      dice[i] = new Dice();
    }
    return dice;
  }

  public constructor(init?: Partial<CoriolisRoll>) {
    Object.assign(this, init);
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skill - the skilltype to roll
   * @param character the Character which provides stats
   * @param manualModifications - manual modifications for the roll
   */
  public rollSkill(skill: SkillType, character: Character, manualModifications: number = 0): Dice[] {
    const numberOfDiceToRoll = this.countAvailableDiceForSkill(skill, character) + manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  /**
   * rolls a single attribute and returns the successes and the dices
   * @param attribute - attribute to use
   * @param character which provides attributes
   * @param manualModifications - manual modifications for the roll
   */
  public rollAttribute(attribute: AttributeType, character: Character, manualModifications: number = 0): Dice[] {
    const numberOfDiceToRoll = this.countAvailableDiceForAttribute(attribute, character) + manualModifications;
    return CoriolisRoll.rollNumberOfDice(numberOfDiceToRoll);
  }

  private countAvailableDiceForSkill(skill: SkillType, character: Character): number {
    const usedSkill: CharacterSkill = character.skills.find(item => item.type === skill);
    const skillValue = usedSkill.value;

    const baseAttributeToUse: AttributeType = GetBaseAttributeTypeOfSkill(skill);
    const baseAttributeValue = this.countAvailableDiceForAttribute(baseAttributeToUse, character);
    const itemModifierValue = this.countItemBonusForSkill(skill, character);
    const talentModifierValue = this.countTalentBonusForSkill(skill, character);

    return skillValue + baseAttributeValue + itemModifierValue + talentModifierValue;
  }

  private countAvailableDiceForAttribute(attributeType: AttributeType, character: Character): number {
    const attribute = character.attributes.find(item => item.type === attributeType);
    return attribute.value;
  }

  private countItemBonusForSkill(skill: SkillType, character: Character): number {
    let itemBonusDice = 0;

    // info: if we roll a specific weapon, we use the rollItem method instead of roll melee or ranged
    for (const item of character.equipedItems) {
      for (const featureOfItem of item.features) {
        if (featureOfItem.skillTypeToBeModified === skill) {
          // if this skill modifies our skilltype
          let isFeatureApplicable = false;
          if (featureOfItem.userQuestionDefaultResponse === UserQuestionDefaultResponse.alwaysAsk) {
            isFeatureApplicable = featureOfItem.userQuestionAtUse();
          } else {
            isFeatureApplicable = featureOfItem.getDefaultResult();
          }

          if (isFeatureApplicable) {
            itemBonusDice = itemBonusDice + featureOfItem.modifier;
          }
        }
      }
    }
    return itemBonusDice;
  }

  private countTalentBonusForSkill(skill: SkillType, character: Character): number {
    const talentBonusDice = 0;
    return talentBonusDice;
  }
}
