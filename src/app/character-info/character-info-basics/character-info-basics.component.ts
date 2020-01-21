import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/character-info/character';

@Component({
  selector: 'app-character-info-basics',
  templateUrl: './character-info-basics.component.html',
  styleUrls: ['./character-info-basics.component.scss']
})
export class CharacterInfoBasicsComponent implements OnInit {
  @Input() character: Character;
  @Input() isPanelExpanded: boolean;

  constructor() {}

  ngOnInit() {}
}
