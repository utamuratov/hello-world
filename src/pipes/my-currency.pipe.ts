import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency',
  standalone: true
})
export class MyCurrencyPipe extends DecimalPipe implements PipeTransform {

  transform(value: any, suffix?: string): any {
    const number = super.transform(value);
    if (number) {
      // Replace ',' with ' '
      let separatedNumber = number.replace(new RegExp(',', 'g'), ' ');
      if (suffix !== undefined) {
        separatedNumber += ' ' + suffix;
      }
      return separatedNumber;
    }
  }

}