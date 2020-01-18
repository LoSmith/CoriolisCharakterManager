import { CharacterAttributes } from '@app/character-info/characterAttributes';

export class Character {
  name: string;
  xp: number;
  attributes: CharacterAttributes;

  constructor(name: string, xp: number) {
    this.name = name;
    this.xp = xp;
  }

  gainXP(additionalXp: number) {
    this.xp += additionalXp;
  }
}
