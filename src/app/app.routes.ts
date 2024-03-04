import { Routes } from '@angular/router';
import { WeatherAdditionalInformationComponent } from './weather/ui/components/weather-additional-information/weather-additional-information.component';
import { WeatherCardContainerComponent } from './weather/ui/components';

export const routes: Routes = [
  { path: '', component: WeatherCardContainerComponent },
  { path: 'city/:id', component: WeatherAdditionalInformationComponent },
];
