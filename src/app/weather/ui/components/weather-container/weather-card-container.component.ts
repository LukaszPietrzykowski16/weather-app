import { Component, inject } from '@angular/core';
import { WeatherCardComponent } from '../weather-card';
import { DataFactoryService } from '../../../data-access/data-factory.service';
import { Weather } from '../../../utils/types/weather.type';
import { map } from 'rxjs/operators';
import { WeatherApi } from '../../../utils/types/weather-api.type';

@Component({
  selector: 'weather-card-container',
  standalone: true,
  imports: [WeatherCardComponent],
  templateUrl: './weather-card-container.component.html',
  styleUrl: './weather-card-container.component.css',
})
export class WeatherCardContainerComponent {
  #dataFactory = inject(DataFactoryService);
  weather = {} as WeatherApi;

  getCity() {
    this.#dataFactory
      .getWeatherInRandomCity()
      .pipe(
        map((weather) => {
          this.weather = weather;
        })
      )
      .subscribe();
  }
}
