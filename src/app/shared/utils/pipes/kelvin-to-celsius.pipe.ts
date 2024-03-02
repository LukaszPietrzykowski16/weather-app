import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'kelvinToCelsius',
})
export class kelvinToCelsiusPipe implements PipeTransform {
  transform(kelvin: number): number {
    return Math.round(kelvin - 273.15);
  }
}
