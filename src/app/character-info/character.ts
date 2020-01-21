import { Dicable } from '@app/shared/dicable';

class CoriolisItems {
  itemId: number;
  itemName: string;
  itemWeight: number;
}

class CharacterAttributes {
  strength: Dicable;
  agility: Dicable;
  wits: Dicable;
  empathy: Dicable;
}

class CharacterStatus {
  hitpoints: [number, number]; // hitpoints left, hitpoints total
  mindpoints: [number, number]; // mindpoints left, mindpoints total
  radiationPoints: [number, number]; // radiationPoints left, radiationPoints total
  encumbarance: [number, number]; // encumbarance left, encumbarance total
  armor: number; // armor points
  reputation: number; // repuatation points
}

export class Character {
  public name: string;
  public concept: string;
  public groupConcept: string;
  public personalProblem: string;
  public background: string;
  public icon: string;
  public xp: number;
  public attributes: CharacterAttributes;
  // public skills: CharacterSkills;
  public bodyStats: CharacterStatus;
  public inventory: CoriolisItems;

  private uid: number;

  public constructor(fields?: {
    name: string;
    xp: number;
    attributes: {
      empathy: { name: string; numberOfDice: number };
      strength: { name: string; numberOfDice: number };
      wits: { name: string; numberOfDice: number };
      agility: { name: string; numberOfDice: number };
    };
    bodyStats: {
      armor: 42;
      reputation: 9001;
    };
  }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  gainXP(additionalXp: number) {
    this.xp = this.xp + additionalXp;
  }
}
