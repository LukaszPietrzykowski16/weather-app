import { Component, Input, inject } from '@angular/core';
import { kelvinToCelsiusPipe } from '../../../../shared/utils/pipes/kelvin-to-celsius.pipe';
import { Weather } from '../../../utils/types/weather.type';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'weather-additional-information',
  templateUrl: './weather-additional-information.component.html',
  standalone: true,
  styleUrl: './weather-additional-information.component.css',
  imports: [kelvinToCelsiusPipe, CommonModule],
})
export class WeatherAdditionalInformationComponent {
  #route = inject(ActivatedRoute);

  @Input() weather!: Weather;
  cityId: string = '';

  ngOnInit(): void {
    this.#route.params.subscribe((params) => {
      this.cityId = params['id'];
    });
  }
}
