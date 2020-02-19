import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { SkillType } from '@app/shared/character/characterSkill';
import { itemStore } from '@app/shared/itemsStore/itemStore';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  char: Character = new Character({
    name: 'Arashar',
    xp: 42,
    attributes: [
      { type: AttributeType.Strength, value: 5 },
      { type: AttributeType.Agility, value: 2 },
      { type: AttributeType.Wits, value: 5 },
      { type: AttributeType.Empathy, value: 3 }
    ],
    skills: [
      { type: SkillType.Dexterity, value: 0 },
      { type: SkillType.Force, value: 3 },
      { type: SkillType.Infiltration, value: 0 },
      { type: SkillType.Manipulation, value: 0 },
      { type: SkillType.MeleeCombat, value: 5 },
      { type: SkillType.Observation, value: 1 },
      { type: SkillType.RangedCombat, value: 0 },
      { type: SkillType.Survival, value: 0 },
      { type: SkillType.Command, value: 0 },
      { type: SkillType.Culture, value: 1 },
      { type: SkillType.DataDjinn, value: 5 },
      { type: SkillType.Medicurgy, value: 0 },
      { type: SkillType.MysticalPowers, value: 0 },
      { type: SkillType.Pilot, value: 0 },
      { type: SkillType.Science, value: 1 },
      { type: SkillType.Technology, value: 3 }
    ],
    bodyStats: {
      reputation: 5,
      armor: 10,
      hitpoints: { current: 42, maximum: 100 },
      mindpoints: { current: 42, maximum: 100 },
      radiationPoints: { current: 42, maximum: 100 },
      encumbarance: { current: 42, maximum: 100 }
    },
    items: []
  });

  areAllOpen = false;
  constructor() {}

  ngOnInit() {}

  onGainXp(): void {
    const additionalXp = 2;
    this.char.gainXP(additionalXp);
  }

  onToggleAll() {
    this.areAllOpen = !this.areAllOpen;
  }
}
