import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = '$'): string {
    if (isNaN(value)) {
      return value.toString(); 
    }

    return (
      currencySymbol +
      value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    );
  }

}
