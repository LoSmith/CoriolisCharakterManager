import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/character/character';

@Component({
  selector: 'app-character-info-bodystats',
  templateUrl: './character-info-bodystats.component.html',
  styleUrls: ['./character-info-bodystats.component.scss']
})
export class CharacterInfoBodystatsComponent implements OnInit {
  @Input() character: Character;
  @Input() isPanelExpanded: boolean;

  constructor() {}

  ngOnInit() {}
}
