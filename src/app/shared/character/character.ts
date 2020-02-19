import { Dice } from '@app/shared/dice/dice';
import { CharacterSkill, GetBaseAttributeTypeOfSkill, SkillType } from '@app/shared/character/characterSkill';
import { AttributeType, CharacterAttribute } from '@app/shared/character/characterAttribute';
import { ItemArmor, ItemWeapon } from '@app/shared/item/item';
import { CharacterBackground } from '@app/shared/character/characterBackground';
import { CharacterName } from '@app/shared/character/characterName';
import { CharacterBodyStat } from '@app/shared/character/characterBodyStat';

export class Character {
  background?: CharacterBackground;
  name?: CharacterName;
  attributes?: Array<CharacterAttribute>;
  bodyStats?: Array<CharacterBodyStat>;
  skills?: Array<CharacterSkill>;

  possessedItems: Array<ItemWeapon | ItemArmor>;
  equipedItems: Array<ItemWeapon | ItemArmor>;

  private static rollNumberOfDice(numberOfDiceToRoll: number): Dice[] {
    const dice: Dice[] = [];
    let numberOfSuccesses = 0;
    for (let i = 0; i < numberOfDiceToRoll; i++) {
      dice[i] = new Dice();
      if (dice[i].rollAgainstUpperThreshold(6)) {
        ++numberOfSuccesses;
      }
    }
    return dice;
  }

  public constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skill - the skilltype to roll
   * @param manualModifications - manual modifications for the roll
   */
  public rollSkill(skill: SkillType, manualModifications: number = 0): Dice[] {
    const numberOfDiceToRoll = this.countAvailableDiceForSkill(skill) + manualModifications;
    return Character.rollNumberOfDice(numberOfDiceToRoll);
  }

  /**
   * rolls a single attribute and returns the successses and the dices
   * @param attribute - attribute to use
   * @param manualModifications - manual modifications for the roll
   */
  public rollAttribute(attribute: AttributeType, manualModifications: number = 0): Dice[] {
    const numberOfDiceToRoll = this.countAvailableDiceForAttribute(attribute) + manualModifications;
    return Character.rollNumberOfDice(numberOfDiceToRoll);
  }

  public gainXP(additionalXp: number) {
    // TODO: BUG 24 + 2 = 242 .. somthing weird with the addition function
    const xp: number = this.background.xp.total;
    this.background.xp.total = xp + additionalXp;
  }

  private countAvailableDiceForSkill(skill: SkillType): number {
    const usedSkill: CharacterSkill = this.skills.find(item => item.type === skill);
    const skillValue = usedSkill.value;

    const baseAttributeToUse: AttributeType = GetBaseAttributeTypeOfSkill(skill);
    const baseAttributeValue = this.countAvailableDiceForAttribute(baseAttributeToUse);

    // const itemModifierValue = this.getItemModifersForSkill(skill);

    return skillValue + baseAttributeValue;
  }

  private countAvailableDiceForAttribute(attributeType: AttributeType): number {
    const attribute = this.attributes.find(item => item.type === attributeType);
    return attribute.value;
  }
}
