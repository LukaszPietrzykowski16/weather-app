import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_KEY } from './api-keys/API_KEY';
import { WeatherApi } from '../utils/types/weather-api.type';
import { citiesId } from '../utils/types/cities.config';

@Injectable({
  providedIn: 'root',
})
export class DataFactoryService {
  #httpClient = inject(HttpClient);

  getWeatherInRandomCity(citiesId: string[]) {
    return this.#httpClient.get<WeatherApi>(
      `https://api.openweathermap.org/data/2.5/group?id=${citiesId.join(
        ','
      )}&appid=${API_KEY}`
    );
  }
}
