import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'monthname'})
export class MonthnamePipe implements PipeTransform{
  transform(value: string): string {
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'obtober', 'november', 'december'];
    return monthNames[parseInt(value)];
  }
}
