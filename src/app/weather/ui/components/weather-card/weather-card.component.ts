import { Component, Input } from '@angular/core';
import { kelvinToCelsiusPipe } from '../../../../shared/utils/pipes/kelvin-to-celsius.pipe';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  standalone: true,
  styleUrl: './weather-card.component.css',
  imports: [kelvinToCelsiusPipe],
})
export class WeatherCardComponent {
  @Input() weather = {
    cityName: 'Łódź',
    temperature: 7,
    description: 'cloudy',
  };
}
