import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Character } from '@app/shared/character/character';
import {
  CharacterConcept,
  CharacterGroupConcept,
  CharacterIcon,
  CharacterOrigin,
  CharacterUpbringing
} from '@app/shared/character/characterBackground';
import { StarSystem } from '@app/shared/starSystem/system';

@Component({
  selector: 'app-character-info-basics',
  templateUrl: './character-info-basics.component.html',
  styleUrls: ['./character-info-basics.component.scss']
})
export class CharacterInfoBasicsComponent implements OnInit {
  @Input() character: Character;
  @Input() isPanelExpanded: boolean;
  characterOrigin = CharacterOrigin;
  characterHomeSystem = StarSystem;
  characterUpBringing = CharacterUpbringing;
  characterConcept = CharacterConcept;
  characterGroupConcept = CharacterGroupConcept;
  characterIcon = CharacterIcon;

  constructor() {}

  ngOnInit() {}
}
