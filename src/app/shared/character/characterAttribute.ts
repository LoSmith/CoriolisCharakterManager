export enum AttributeType {
  Strength = 'Strength',
  Agility = 'Agility',
  Wits = 'Wits',
  Empathy = 'Empathy'
}

export interface CharacterAttribute {
  type: AttributeType;
  value: number;
}
