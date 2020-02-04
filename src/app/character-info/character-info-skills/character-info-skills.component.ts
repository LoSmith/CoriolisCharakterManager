import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/character/character';
import { Dice } from '@app/shared/dice/dice';
import { DiceRollService } from '@app/dice-roll-modal/dice-roll.service';
import { CharacterAttribute } from '@app/shared/character/characterAttribute';
import { CharacterSkill } from '@app/shared/character/characterSkill';

@Component({
  selector: 'app-character-info-skills',
  templateUrl: './character-info-skills.component.html',
  styleUrls: ['./character-info-skills.component.scss']
})
export class CharacterInfoSkillsComponent implements OnInit {
  @Input() selectedCharacter: Character;
  @Input() isPanelExpanded: boolean;

  constructor(public diceRollService: DiceRollService) {}

  ngOnInit() {}

  onDiceRollPressed(skill: CharacterSkill) {
    const dice: Dice[] = this.selectedCharacter.rollSkill(skill.type);
    this.diceRollService.openDialog(skill, dice);
  }
}
