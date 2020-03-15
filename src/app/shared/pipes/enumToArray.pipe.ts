import { Pipe, PipeTransform } from '@angular/core';
import { EnumValues } from 'enum-values';

@Pipe({ name: 'enumToArray' })
export class EnumToArrayPipe implements PipeTransform {
  // tslint:disable-next-line:ban-types
  transform(data: Object) {
    return EnumValues.getNames(data);
  }
}
