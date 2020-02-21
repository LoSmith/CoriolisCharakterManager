import { Character } from '@app/shared/character/character';
import { BodyStatType } from '@app/shared/character/characterBodyStat';
import { AttributeType } from '@app/shared/character/characterAttribute';
import { TalentType } from '@app/shared/character/characterTalents';

function updateEncumbrance(character: Character) {
  const generalEncumbranceMinimum = 0;

  const encumbaranceBodyStat = character.bodyStats.find(item => item.type === BodyStatType.Encumbarance);

  // update minimum
  encumbaranceBodyStat.value.minimum = generalEncumbranceMinimum;
  // update maximum
  const strength = character.attributes.find(item => item.type === AttributeType.Strength).value;
  encumbaranceBodyStat.value.maximum = strength * 2;

  // update current
  let newEncumbrance = 0;
  character.equipedItems.forEach(item => {
    newEncumbrance += item.weight;
  });
  encumbaranceBodyStat.value.current = newEncumbrance;
}

function updateBodyStats(character: Character) {
  updateEncumbrance(character);
}

export { updateBodyStats };
