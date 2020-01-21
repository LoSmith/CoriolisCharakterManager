import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dicable } from '@app/shared/dicable';

@Component({
  selector: 'app-dicable',
  templateUrl: './dicable.component.html',
  styleUrls: ['./dicable.component.scss']
})
export class DicableComponent implements OnInit {
  @Input() dicable: Dicable;
  // @Input() isEditable: boolean;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  onTriggerDiceRoll() {
    const rolls = [];
    console.log(this.dicable.numberOfDice);
    for (let i = 0; i < this.dicable.numberOfDice; i++) {
      rolls.push(Math.ceil(Math.random() * 6));
    }

    const countedSuccesses = rolls.filter(value => value === 6).length;
    let resultString = `You rolled ${this.dicable.name} with ${countedSuccesses} Successes. Dice Rolls are: `;
    for (let i = 0; i < this.dicable.numberOfDice; i++) {
      resultString = resultString.concat(`${rolls[i]}, `);
    }

    this._snackBar.open(resultString, '', {
      duration: 3000
    });
  }
}
