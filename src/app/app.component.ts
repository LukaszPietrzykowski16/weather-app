import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardContainerComponent } from './weather/ui/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherCardContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-app';
}
