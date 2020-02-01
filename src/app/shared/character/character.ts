import { Dice } from '@app/shared/dice/dice';
import { SkillTypes } from '@app/shared/character/skillTypes';
import { AttributeTypes } from '@app/shared/character/attributeTypes';
import { GetBaseAttributeTypeOfSkill } from '@app/shared/character/skillTypes';

export interface CharacterSkill {
  type: SkillTypes;
  value: number;
}

export interface CharacterAttribute {
  type: AttributeTypes;
  value: number;
}

interface CoriolisItem {
  itemId: number;
  itemName: string;
  itemWeight: number;
  influenceToSkill: [];
}

class CharacterBodyStatus {
  hitpoints: [number, number]; // hitpoints left, hitpoints total
  mindpoints: [number, number]; // mindpoints left, mindpoints total
  radiationPoints: [number, number]; // radiationPoints left, radiationPoints total
  encumbarance: [number, number]; // encumbarance left, encumbarance total
  armor: number; // armor points
  reputation: number; // repuatation points
}

class CharacterInventory {}

export class Character {
  name: string;
  concept: string;
  groupConcept: string;
  personalProblem: string;
  background: string;
  icon: string;
  xp: number;

  attributes: CharacterAttribute[];
  skills: CharacterSkill[];
  // bodyStats?: CharacterBodyStatus;
  // inventory: CharacterInventory;

  private uid: number;

  public constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }

  /**
   * rolls a skilltype and returns the successses and the dices
   * @param skill - the skilltype to roll
   * @param manualModifications - manual modifications for the roll
   */
  rollSkill(skill: SkillTypes, manualModifications: number = 0): [number, Dice[]] {
    const numberOfDiceToRoll = this.countAvailableDiceForSkill(skill) + manualModifications;

    const dice: Dice[] = [];
    let numberOfSuccesses = 0;
    for (let i = 0; i < numberOfDiceToRoll; i++) {
      dice[i] = new Dice();
      if (dice[i].rollAgainstUpperThreshold(6)) {
        ++numberOfSuccesses;
      }
    }
    return [numberOfSuccesses, dice];
  }

  gainXP(additionalXp: number) {
    this.xp = this.xp + additionalXp;
  }

  private countAvailableDiceForSkill(skill: SkillTypes): number {
    const usedSkill: CharacterSkill = this.skills.find(item => item.type === skill);
    const skillValue = usedSkill.value;

    const baseAttributeToUse: AttributeTypes = GetBaseAttributeTypeOfSkill(skill);
    const baseAttribute = this.attributes.find(item => item.type === baseAttributeToUse);
    const baseAttributeValue = baseAttribute.value;
    return skillValue + baseAttributeValue;
  }
}
