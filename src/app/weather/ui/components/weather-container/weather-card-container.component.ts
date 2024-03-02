import { Component, inject } from '@angular/core';
import { WeatherCardComponent } from '../weather-card';
import { DataFactoryService } from '../../../data-access/data-factory.service';
import { Weather } from '../../../utils/types/weather.type';
import { map } from 'rxjs/operators';
import { WeatherApi } from '../../../utils/types/weather-api.type';
import { WeatherStateService } from '../../../data-access/weather.state.service';

@Component({
  selector: 'weather-card-container',
  standalone: true,
  imports: [WeatherCardComponent],
  templateUrl: './weather-card-container.component.html',
  styleUrl: './weather-card-container.component.css',
})
export class WeatherCardContainerComponent {
  #dataFactory = inject(DataFactoryService);

  $weather = inject(WeatherStateService).weather;

  getCity() {
    this.#dataFactory
      .getWeatherInRandomCity()
      .pipe(
        map((apiWeather) => {
          console.log(apiWeather);
          const { main, name, weather } = apiWeather;
          const temperature = String(main.temp);
          const cityName = name;
          const description = weather[0].description;

          this.$weather.set({
            temperature,
            cityName,
            description,
          });
        })
      )
      .subscribe();
  }
}
