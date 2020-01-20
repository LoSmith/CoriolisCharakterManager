import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Character } from '@app/character-info/character';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  char: Character = new Character({
    name: 'Arashar',
    xp: 42,
    attributes: {
      strength: {
        name: 'Strength',
        numberOfDice: 3
      },
      agility: {
        name: 'Agility',
        numberOfDice: 3
      },
      wits: {
        name: 'Wits',
        numberOfDice: 3
      },
      empathy: {
        name: 'Empathy',
        numberOfDice: 3
      }
    }
  });

  areAllOpen = true;

  constructor() {}

  ngOnInit() {}

  onGainXp(): void {
    this.char.gainXP(2);
  }

  onToggleAll() {
    this.areAllOpen = !this.areAllOpen;
  }
}
