import { Component, OnInit, inject } from '@angular/core';
import { WeatherCardComponent } from '../weather-card';
import { DataFactoryService } from '../../../data-access/data-factory.service';
import { map, take, takeUntil } from 'rxjs/operators';
import { WeatherStateService } from '../../../data-access/weather.state.service';
import { randomNumberArray } from '../../../../shared/utils';
import { CurrentCitiesStateService } from '../../../data-access/current-citites.service';
import { citiesId } from '../../../utils/types/cities.config';
import { CommonModule } from '@angular/common';
import { Subject, interval } from 'rxjs';
import { Weather } from '../../../utils/types/weather.type';

@Component({
  selector: 'weather-card-container',
  standalone: true,
  imports: [WeatherCardComponent, CommonModule],
  templateUrl: './weather-card-container.component.html',
  styleUrl: './weather-card-container.component.css',
})
export class WeatherCardContainerComponent implements OnInit {
  #dataFactory = inject(DataFactoryService);

  weather$ = inject(WeatherStateService).weather;
  currentCitities$ = inject(CurrentCitiesStateService).currentCititesIds;

  timer$ = interval(60000);
  weatherTimer$ = interval(10000);

  destroy$ = new Subject<void>();

  #getCities() {
    this.#dataFactory
      .getWeatherInRandomCity(this.currentCitities$())
      .pipe(
        map((apiWeather) => {
          const weatherInformation = apiWeather.list.map((information) => {
            const temperature = information.main.temp;
            const id = information.id;
            const cityName = information.name;
            const description = information.weather[0].description;
            const lon = information.coord.lon;
            const lat = information.coord.lat;
            const imgUrl = information.weather[0].icon;
            return { temperature, cityName, description, lon, lat, id, imgUrl };
          });

          if (this.weather$().length >= 3) {
            this.weather$.set([]);
          }

          this.weather$.set(weatherInformation);
        })
      )
      .subscribe();
  }

  #initCurrentsCitiesIds() {
    const randomNumbers = randomNumberArray(0, 4, 3);

    this.currentCitities$.set([
      citiesId[randomNumbers[0]],
      citiesId[randomNumbers[1]],
      citiesId[randomNumbers[2]],
    ]);
  }

  #refreshCititesEveryMinute() {
    this.timer$
      .pipe(
        takeUntil(this.destroy$),
        map(() => {
          this.#initCurrentsCitiesIds();
          this.#getCities();
        })
      )
      .subscribe();
  }

  #refreshWeatherEveryTenSeconds() {
    this.weatherTimer$
      .pipe(
        takeUntil(this.destroy$),
        map(() => {
          this.#getCities();
        })
      )
      .subscribe();
  }

  trackByFn(index: number, weather: Weather) {
    return weather.cityName;
  }

  ngOnInit(): void {
    this.#initCurrentsCitiesIds();
    this.#getCities();
    this.#refreshCititesEveryMinute();
    this.#refreshWeatherEveryTenSeconds();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
