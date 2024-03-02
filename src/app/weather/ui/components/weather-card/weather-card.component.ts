import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  standalone: true,
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  @Input() weather = {
    cityName: 'Łódź',
    temperature: '7',
    description: 'cloudy',
  };
}
