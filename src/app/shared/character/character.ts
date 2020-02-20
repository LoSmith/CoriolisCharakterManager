import { Dice } from '@app/shared/dice/dice';
import { CharacterSkill, GetBaseAttributeTypeOfSkill, SkillType } from '@app/shared/character/characterSkill';
import { AttributeType, CharacterAttribute } from '@app/shared/character/characterAttribute';
import { ItemArmor, ItemGadget, ItemWeapon } from '@app/shared/item/item';
import { CharacterBackground, CharacterIcon } from '@app/shared/character/characterBackground';
import { CharacterName } from '@app/shared/character/characterName';
import { CharacterBodyStat } from '@app/shared/character/characterBodyStat';
import { CharacterTalents } from '@app/shared/character/characterTalents';
import { CharacterGroupTalent } from '@app/shared/character/characterGroupTalent';
import { CharacterIconTalent } from '@app/shared/character/characterIconTalent';

export class Character {
  background?: CharacterBackground;
  name?: CharacterName;

  attributes?: Array<CharacterAttribute>;
  bodyStats?: Array<CharacterBodyStat>;
  skills?: Array<CharacterSkill>;

  talents?: Array<CharacterTalents>;
  groupTalent?: CharacterGroupTalent;
  iconTalent?: CharacterIconTalent;

  equipedItems?: Array<ItemWeapon | ItemArmor | ItemGadget>;
  possessedItems?: Array<ItemWeapon | ItemArmor | ItemGadget>;

  public constructor(init?: Partial<Character>) {
    Object.assign(this, init);
  }

  public gainXP(additionalXp: number) {
    // TODO: BUG 24 + 2 = 242 .. somthing weird with the addition function
    const xp = this.background.xp.total;
    this.background.xp.total = xp + additionalXp;
  }
}
