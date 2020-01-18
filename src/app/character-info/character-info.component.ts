import { Component, OnInit } from '@angular/core';
import { Character } from '@app/character-info/character';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  characterArashar: Character = new Character({
    name: 'Arashar',
    alliance: 'Zenith',
    xp: 42
  });
  openAll = true;

  constructor() {}

  ngOnInit() {}

  onGainXp(): void {
    this.characterArashar.gainXP(2);
  }
}
