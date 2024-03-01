import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardContainerComponent } from './weather/ui/components';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherCardContainerComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-app';
}
