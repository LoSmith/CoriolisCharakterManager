class CharacterAttributes {
  strength: number;
  agility: number;
  wits: number;
  empathy: number;
}

class BodyStats {
  hitpoints: [number, number]; // hitpoints left, hitpoints total
  mindpoints: [number, number]; // mindpoints left, mindpoints total
  radiationPoints: [number, number]; // radiationPoints left, radiationPoints total
  encumbarance: [number, number]; // encumbarance left, encumbarance total
  armor: number; // armor points
  reputation: number; // repuatation points
}

class CoriolisItems {
  itemId: number;
  itemName: string;
  itemWeight: number;
}

export class Character {
  public name: string;
  public aliance: string;
  public xp: number;
  public attributes: CharacterAttributes;
  public bodyStats: BodyStats;
  public inventory: CoriolisItems;

  private uid: number;

  public constructor(fields?: {
    uid?: number;
    name?: string;
    alliance?: string;
    xp?: number;
    attributes?: CharacterAttributes;
    bodyStats?: BodyStats;
    inventory?: CoriolisItems;
  }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  gainXP(additionalXp: number) {
    this.xp += additionalXp;
  }
}
