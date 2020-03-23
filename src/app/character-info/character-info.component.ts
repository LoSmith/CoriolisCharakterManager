import { Component } from '@angular/core';
import { Character } from '@app/shared/character/character';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { SkillType } from '@app/shared/character/characterSkill';
import { BodyStatType } from '@app/shared/character/characterBodyStat';
import { CharacterOrigin } from '@app/shared/character/characterBackground';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StarSystem } from '@app/shared/starSystem/system';
import { itemStore } from '@app/shared/itemsStore/itemStore';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent {
  char1: Character = new Character({
    name: {
      firstName: 'Arashar',
      nickName: 'badass',
      sureName: 'Abdullah al Ansari'
    },
    background: {
      origin: CharacterOrigin.Firstcome,
      homeSystem: StarSystem.Algol,
      xp: {
        spent: 5,
        free: 42
      }
    },
    bodyStats: [
      { type: BodyStatType.Hitpoints, value: { maximum: 10, minimum: 0, current: 5 } },
      { type: BodyStatType.Mindpoints, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.Encumbarance, value: { maximum: 8, minimum: 0, current: 5 } },
      { type: BodyStatType.Reputation, value: { current: 10, minimum: 0 } },
      { type: BodyStatType.RadiationPoints, value: { current: 10, minimum: 0 } }
    ],
    attributes: [
      { type: AttributeType.Strength, value: 5 },
      { type: AttributeType.Agility, value: 2 },
      { type: AttributeType.Wits, value: 5 },
      { type: AttributeType.Empathy, value: 3 }
    ],
    skills: [
      { type: SkillType.Dexterity, value: 0 },
      { type: SkillType.Force, value: 3 },
      { type: SkillType.Infiltration, value: 0 },
      { type: SkillType.Manipulation, value: 0 },
      { type: SkillType.MeleeCombat, value: 5 },
      { type: SkillType.Observation, value: 1 },
      { type: SkillType.RangedCombat, value: 0 },
      { type: SkillType.Survival, value: 0 },
      { type: SkillType.Command, value: 0 },
      { type: SkillType.Culture, value: 1 },
      { type: SkillType.DataDjinn, value: 5 },
      { type: SkillType.Medicurgy, value: 0 },
      { type: SkillType.MysticalPowers, value: 0 },
      { type: SkillType.Pilot, value: 0 },
      { type: SkillType.Science, value: 1 },
      { type: SkillType.Technology, value: 3 }
    ],
    equipedItems: [
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.quirkyStuff.jostersLangerPenis
    ],
    spaceShipItems: [itemStore.quirkyStuff.quantenFluxGenerator]
  });

  char2: Character = new Character({
    name: {
      firstName: 'Berashar',
      nickName: 'badass',
      sureName: 'Abdullah al Ansari'
    },
    background: {
      origin: CharacterOrigin.Firstcome,
      homeSystem: StarSystem.Algol,
      xp: {
        spent: 5,
        free: 42
      }
    },
    bodyStats: [
      { type: BodyStatType.Hitpoints, value: { maximum: 10, minimum: 0, current: 5 } },
      { type: BodyStatType.Mindpoints, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.Encumbarance, value: { maximum: 8, minimum: 0, current: 5 } },
      { type: BodyStatType.Reputation, value: { current: 10, minimum: 0 } },
      { type: BodyStatType.RadiationPoints, value: { current: 10, minimum: 0 } }
    ],
    attributes: [
      { type: AttributeType.Strength, value: 5 },
      { type: AttributeType.Agility, value: 2 },
      { type: AttributeType.Wits, value: 5 },
      { type: AttributeType.Empathy, value: 3 }
    ],
    skills: [
      { type: SkillType.Dexterity, value: 0 },
      { type: SkillType.Force, value: 3 },
      { type: SkillType.Infiltration, value: 0 },
      { type: SkillType.Manipulation, value: 0 },
      { type: SkillType.MeleeCombat, value: 5 },
      { type: SkillType.Observation, value: 1 },
      { type: SkillType.RangedCombat, value: 0 },
      { type: SkillType.Survival, value: 0 },
      { type: SkillType.Command, value: 0 },
      { type: SkillType.Culture, value: 1 },
      { type: SkillType.DataDjinn, value: 5 },
      { type: SkillType.Medicurgy, value: 0 },
      { type: SkillType.MysticalPowers, value: 0 },
      { type: SkillType.Pilot, value: 0 },
      { type: SkillType.Science, value: 1 },
      { type: SkillType.Technology, value: 3 }
    ],
    equipedItems: [
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.quirkyStuff.jostersLangerPenis
    ],
    spaceShipItems: [itemStore.quirkyStuff.quantenFluxGenerator]
  });

  char3: Character = new Character({
    name: {
      firstName: 'Cerashar',
      nickName: 'badass',
      sureName: 'Abdullah al Ansari'
    },
    background: {
      origin: CharacterOrigin.Firstcome,
      homeSystem: StarSystem.Algol,
      xp: {
        spent: 5,
        free: 42
      }
    },
    bodyStats: [
      { type: BodyStatType.Hitpoints, value: { maximum: 10, minimum: 0, current: 5 } },
      { type: BodyStatType.Mindpoints, value: { maximum: 10, minimum: 0, current: 10 } },
      { type: BodyStatType.Encumbarance, value: { maximum: 8, minimum: 0, current: 5 } },
      { type: BodyStatType.Reputation, value: { current: 10, minimum: 0 } },
      { type: BodyStatType.RadiationPoints, value: { current: 10, minimum: 0 } }
    ],
    attributes: [
      { type: AttributeType.Strength, value: 5 },
      { type: AttributeType.Agility, value: 2 },
      { type: AttributeType.Wits, value: 5 },
      { type: AttributeType.Empathy, value: 3 }
    ],
    skills: [
      { type: SkillType.Dexterity, value: 0 },
      { type: SkillType.Force, value: 3 },
      { type: SkillType.Infiltration, value: 0 },
      { type: SkillType.Manipulation, value: 0 },
      { type: SkillType.MeleeCombat, value: 5 },
      { type: SkillType.Observation, value: 1 },
      { type: SkillType.RangedCombat, value: 0 },
      { type: SkillType.Survival, value: 0 },
      { type: SkillType.Command, value: 0 },
      { type: SkillType.Culture, value: 1 },
      { type: SkillType.DataDjinn, value: 5 },
      { type: SkillType.Medicurgy, value: 0 },
      { type: SkillType.MysticalPowers, value: 0 },
      { type: SkillType.Pilot, value: 0 },
      { type: SkillType.Science, value: 1 },
      { type: SkillType.Technology, value: 3 }
    ],
    equipedItems: [
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.weapons.melee.knife(),
      itemStore.quirkyStuff.jostersLangerPenis
    ],
    spaceShipItems: [itemStore.quirkyStuff.quantenFluxGenerator]
  });

  constructor() {}
}
