import { EnumToArrayPipe } from '@app/shared/pipes/enumToArray.pipe';
import { async } from '@angular/core/testing';

describe('CharacterInfoComponent', () => {
  let testobject: EnumToArrayPipe;

  beforeEach(async(() => {
    testobject = new EnumToArrayPipe();
  }));

  it('create an array out of a enum', () => {
    enum testEnum {
      FirstEntry,
      SecondEntry
    }

    const result = testobject.transform(testEnum);
    expect(result.length).toEqual(2);
    result.forEach((item, index) => {
      expect(result[index]).toEqual(testEnum[index]);
    });
  });

  it('create an array out of a enum 2', () => {
    enum testEnumWithStrings {
      First = 'First_String',
      Second = 'Second_String'
    }
    const result = testobject.transform(testEnumWithStrings);
    expect(result.length).toEqual(2);

    result.forEach((item, index) => {
      expect(testEnumWithStrings[item]).not.toBeNull();
    });
  });
});
