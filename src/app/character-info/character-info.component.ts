import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { SkillType } from '@app/shared/character/characterSkill';
import { BodyStatType } from '@app/shared/character/characterBodyStat';

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
export class CharacterInfoComponent {
  char: Character = new Character({
    name: {
      firstName: 'Arashar',
      NickName: 'Arashar',
      SureName: 'Abdullah al Ansari'
    },
    background: {
      xp: {
        total: 42,
        spend: 17,
        free: 42 - 17
      }
    },
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
    bodyStats: [
      { type: BodyStatType.Hitpoints, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.Mindpoints, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.Encumbarance, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.Reputation, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.RadiationPoints, value: { maximum: 10, minimum: 0, current: 10 } }
    ]
  });

  areAllOpen = false;
  constructor() {}

  onGainXp(): void {
    const additionalXp = 2;
    this.char.gainXP(additionalXp);
  }

  onToggleAll() {
    this.areAllOpen = !this.areAllOpen;
  }
}
