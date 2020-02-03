import { ApplicationRef, Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dice } from '@app/shared/dice/dice';
import { CharacterAttribute, CharacterSkill } from '@app/shared/character/character';

export interface DiceRollModalDialogData {
  source: CharacterAttribute | CharacterSkill;
  dice: Dice[];
}

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll-modal.component.html',
  styleUrls: ['./dice-roll-modal.component.scss']
})
export class DiceRollModalComponent implements OnInit {
  constructor(
    public appRef: ApplicationRef,
    public dialogRef: MatDialogRef<DiceRollModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DiceRollModalDialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  isSuccess(dice: Dice): boolean {
    return dice.diceResult === 6;
  }

  isNoSuccess(dice: Dice): boolean {
    return dice.diceResult !== 6;
  }

  onRerollClick() {
    this.data.dice = this.data.dice.map(dice => {
      if (this.isNoSuccess(dice)) {
        dice.roll();
      }
      return dice;
    });

    this.appRef.tick();
  }
}
