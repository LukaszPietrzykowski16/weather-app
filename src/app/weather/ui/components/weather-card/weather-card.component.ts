import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  standalone: true,
})
export class WeatherCardComponent {
  @Input() weather = {
    cityName: 'Łódź',
    temperature: '7',
    description: 'cloudy',
  };
}
