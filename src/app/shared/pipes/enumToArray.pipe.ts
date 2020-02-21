import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToArray' })
export class EnumToArrayPipe implements PipeTransform {
  // tslint:disable-next-line:ban-types
  transform(data: Object) {
    let result = [];
    for (let keyValue of Object.keys(data)) {
      result.push(data[keyValue]);
    }

    return result;
    // return keys.slice(keys.length / 2);
  }
}
