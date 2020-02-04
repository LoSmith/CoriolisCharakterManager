import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/character/character';

@Component({
  selector: 'app-character-info-items',
  templateUrl: './character-info-items.component.html',
  styleUrls: ['./character-info-items.component.scss']
})
export class CharacterInfoItemsComponent implements OnInit {
  @Input() selectedCharacter: Character;
  @Input() isPanelExpanded: boolean;

  constructor() {}

  ngOnInit() {}
}
