import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/character-info/character';

@Component({
  selector: 'app-character-info-skills',
  templateUrl: './character-info-skills.component.html',
  styleUrls: ['./character-info-skills.component.scss']
})
export class CharacterInfoSkillsComponent implements OnInit {
  @Input()
  selectedCharacter: Character;

  @Input()
  allOpen: boolean;

  constructor() {}

  ngOnInit() {}
}
