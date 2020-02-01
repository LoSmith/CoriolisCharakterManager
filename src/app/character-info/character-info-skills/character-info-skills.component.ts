import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/character/character';

@Component({
  selector: 'app-character-info-skills',
  templateUrl: './character-info-skills.component.html',
  styleUrls: ['./character-info-skills.component.scss']
})
export class CharacterInfoSkillsComponent implements OnInit {
  @Input() selectedCharacter: Character;
  @Input() isPanelExpanded: boolean;

  constructor() {}

  ngOnInit() {}
}
