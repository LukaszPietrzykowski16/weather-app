import { Component, Input, inject } from '@angular/core';
import { kelvinToCelsiusPipe } from '../../../../shared/utils/pipes/kelvin-to-celsius.pipe';
import { Weather } from '../../../utils/types/weather.type';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WeatherStateService } from '../../../data-access/weather.state.service';
import { DataFactoryService } from '../../../data-access/data-factory.service';
import { map } from 'rxjs';
import {
  WeatherApi,
  WeatherInformation,
} from '../../../utils/types/weather-api.type';

@Component({
  selector: 'weather-additional-information',
  templateUrl: './weather-additional-information.component.html',
  standalone: true,
  styleUrl: './weather-additional-information.component.css',
  imports: [kelvinToCelsiusPipe, CommonModule],
})
export class WeatherAdditionalInformationComponent {
  #route = inject(ActivatedRoute);

  #dataFactoryService = inject(DataFactoryService);

  weather = {} as WeatherInformation;

  cityId: string = '';

  ngOnInit(): void {
    this.#route.params.subscribe((params) => {
      this.cityId = params['id'];
    });
    this.#dataFactoryService
      .getWeatherInExactCity(this.cityId)
      .pipe(
        map((data) => {
          console.log(data);
          this.weather = data;
        })
      )
      .subscribe();
  }
}
