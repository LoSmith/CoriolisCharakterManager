import { Component, Input, OnInit } from '@angular/core';
import { Character, CharacterAttribute } from '@app/shared/character/character';
import { DiceRollService } from '@app/dice-roll-modal/dice-roll.service';
import { Dice } from '@app/shared/dice/dice';

@Component({
  selector: 'app-character-info-attributes',
  templateUrl: './character-info-attributes.component.html',
  styleUrls: ['./character-info-attributes.component.scss']
})
export class CharacterInfoAttributesComponent implements OnInit {
  @Input() selectedCharacter: Character;
  @Input() isPanelExpanded: boolean;

  constructor(public diceRollService: DiceRollService) {}

  ngOnInit() {}

  onDiceRollPressed(attribute: CharacterAttribute) {
    const dice: Dice[] = this.selectedCharacter.rollAttribute(attribute.type);
    this.diceRollService.openDialog(attribute, dice);
  }
}
