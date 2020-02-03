import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dice } from '@app/shared/dice/dice';
import { DiceRollModalDialogData, DiceRollModalComponent } from '@app/dice-roll-modal/dice-roll-modal.component';
import { CharacterAttribute, CharacterSkill } from '@app/shared/character/character';

@Injectable({
  providedIn: 'root'
})
export class DiceRollService {
  constructor(public dialog: MatDialog) {}

  openDialog(source: CharacterSkill | CharacterAttribute, dice: Dice[]): void {
    const dataContainer: DiceRollModalDialogData = { source, dice };

    const dialogRef = this.dialog.open(DiceRollModalComponent, {
      width: '33%',
      data: dataContainer
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
