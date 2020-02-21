import { EnumToArrayPipe } from '@app/shared/pipes/enumToArray.pipe';
import { async } from '@angular/core/testing';

describe('CharacterInfoComponent', () => {
  let testobject: EnumToArrayPipe;
  enum testEnum {
    FirstEntry,
    SecondEntry
  }

  enum testEnumWithStrings {
    First = 'First',
    Second = 'Second'
  }

  beforeEach(async(() => {
    testobject = new EnumToArrayPipe();
  }));

  it('create an array out of a enum', () => {
    const result = testobject.transform(testEnum);
    expect(result.length).toEqual(2);
    result.forEach((item, index) => {
      expect(result[index]).toEqual(testEnum[index]);
    });
  });

  it('create an array out of a enum 2', () => {
    const result = testobject.transform(testEnumWithStrings);
    expect(result.length).toEqual(2);
    result.forEach((item, index) => {
      expect(result[index]).toEqual(testEnumWithStrings[index]);
    });
  });
});
