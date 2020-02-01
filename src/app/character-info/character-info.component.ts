import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/attributeType';
import { SkillType } from '@app/shared/character/skillType';

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
      { type: AttributeType.Strength, value: 1 },
      { type: AttributeType.Agility, value: 2 },
      { type: AttributeType.Wits, value: 3 },
      { type: AttributeType.Empathy, value: 4 }
    ],
    skills: [
      { type: SkillType.Command, value: 5 },
      { type: SkillType.Culture, value: 4 },
      { type: SkillType.DataDjinn, value: 3 },
      { type: SkillType.Force, value: 2 },
      { type: SkillType.Manipulation, value: 1 },
      { type: SkillType.Survival, value: 0 }
    ],
    bodyStatus: {
      reputation: 100,
      armor: 100,
      hitpoints: { currentValue: 42, maximumValue: 100 },
      mindpoints: { currentValue: 42, maximumValue: 100 },
      radiationPoints: { currentValue: 42, maximumValue: 100 },
      encumbarance: { currentValue: 42, maximumValue: 100 }
    }
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
