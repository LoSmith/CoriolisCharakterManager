export interface CharacterAttribute {
  type: AttributeType;
  value: number;
}

export enum AttributeType {
  Strength = 'Strength',
  Agility = 'Agility',
  Wits = 'Wits',
  Empathy = 'Empathy'
}
