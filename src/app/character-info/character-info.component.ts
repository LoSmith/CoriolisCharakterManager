import { Component, OnInit } from '@angular/core';
import { Character } from '@app/character-info/character';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  currentCharacter: Character = new Character('Arashar', 42);

  constructor() {}

  ngOnInit() {}

  onGainXp(): void {
    this.currentCharacter.gainXP(2);
  }
}
