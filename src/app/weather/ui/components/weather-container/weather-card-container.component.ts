import { Component } from '@angular/core';
import { WeatherCardComponent } from '../weather-card';

@Component({
  selector: 'weather-card-container',
  standalone: true,
  imports: [WeatherCardComponent],
  templateUrl: './weather-card-container.component.html',
})
export class WeatherCardContainerComponent {}
