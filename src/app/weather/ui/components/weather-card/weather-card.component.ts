import { Component, Input } from '@angular/core';
import { kelvinToCelsiusPipe } from '../../../../shared/utils/pipes/kelvin-to-celsius.pipe';
import { Weather } from '../../../utils/types/weather.type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  standalone: true,
  styleUrl: './weather-card.component.css',
  imports: [kelvinToCelsiusPipe, CommonModule, RouterModule],
})
export class WeatherCardComponent {
  @Input() weather!: Weather;
}
