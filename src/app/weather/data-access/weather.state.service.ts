import { Injectable, signal } from '@angular/core';
import { Weather } from '../utils/types/weather.type';

@Injectable({
  providedIn: 'root',
})
export class WeatherStateService {
  weather = signal<Weather[]>([]);
}
