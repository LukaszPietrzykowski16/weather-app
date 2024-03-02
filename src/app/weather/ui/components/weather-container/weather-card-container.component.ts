import { Component, OnInit, inject } from '@angular/core';
import { WeatherCardComponent } from '../weather-card';
import { DataFactoryService } from '../../../data-access/data-factory.service';
import { map } from 'rxjs/operators';
import { WeatherStateService } from '../../../data-access/weather.state.service';
import { randomNumberArray } from '../../../../shared/utils';
import { CurrentCitiesStateService } from '../../../data-access/current-citites.service';
import { citiesId } from '../../../utils/types/cities.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'weather-card-container',
  standalone: true,
  imports: [WeatherCardComponent, CommonModule],
  templateUrl: './weather-card-container.component.html',
  styleUrl: './weather-card-container.component.css',
})
export class WeatherCardContainerComponent implements OnInit {
  #dataFactory = inject(DataFactoryService);

  $weather = inject(WeatherStateService).weather;
  $currentCitities = inject(CurrentCitiesStateService).currentCititesIds;

  getCities() {
    this.$currentCitities().forEach((num) => {
      this.#dataFactory
        .getWeatherInRandomCity(num)
        .pipe(
          map((apiWeather) => {
            const { main, name, weather } = apiWeather;
            const temperature = String(main.temp);
            const cityName = name;
            const description = weather[0].description;

            this.$weather.update((value) => {
              return [
                ...value,
                {
                  temperature,
                  cityName,
                  description,
                },
              ];
            });
          })
        )
        .subscribe();
    });
  }

  initCurrentsCitiesIds() {
    const randomNumbers = randomNumberArray(0, 4, 3);

    this.$currentCitities.set([
      citiesId[randomNumbers[0]],
      citiesId[randomNumbers[1]],
      citiesId[randomNumbers[2]],
    ]);
  }

  ngOnInit(): void {
    this.initCurrentsCitiesIds();
    this.getCities();
  }
}
