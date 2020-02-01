import { Dicable } from '@app/shared/dicable';
import { Dice } from '@app/shared/dice/dice';

class CoriolisItems {
  itemId: number;
  itemName: string;
  itemWeight: number;

  public constructor(init?: Partial<CharacterAttributes>) {
    Object.assign(this, init);
  }
}

class CharacterAttributes {
  strength: Dicable;
  agility: Dicable;
  wits: Dicable;
  empathy: Dicable;

  public constructor(init?: Partial<CharacterAttributes>) {
    Object.assign(this, init);
  }
}

class CharacterBodyStatus {
  hitpoints: [number, number]; // hitpoints left, hitpoints total
  mindpoints: [number, number]; // mindpoints left, mindpoints total
  radiationPoints: [number, number]; // radiationPoints left, radiationPoints total
  encumbarance: [number, number]; // encumbarance left, encumbarance total
  armor: number; // armor points
  reputation: number; // repuatation points
}

class CharacterSkills {
  dexterity: Dicable;
  force: Dicable;
  infiltration: Dicable;
  manipulation: Dicable;
  meleeCombat: Dicable;
  observation: Dicable;
  rangedCombat: Dicable;
  survival: Dicable;
  command: Dicable;
  culture: Dicable;
  dataDjinn: Dicable;
  medicurgy: Dicable;
  mysticalPowers: Dicable;
  pilot: Dicable;
  science: Dicable;
  technology: Dicable;

  public constructor(init?: Partial<CharacterSkills>) {
    Object.assign(this, init);
  }
}

export class Character {
  name: string;
  concept: string;
  groupConcept: string;
  personalProblem: string;
  background: string;
  icon: string;
  xp: number;
  attributes: CharacterAttributes;
  bodyStats: CharacterBodyStatus;
  inventory: CoriolisItems;
  skills: CharacterSkills;

  private uid: number;

  public constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }

  gainXP(additionalXp: number) {
    this.xp = this.xp + additionalXp;
  }
}
