import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WeatherCardContainerComponent } from './weather/ui/components';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './shared/ui/components/header/header.component';
import { FooterComponent } from './shared/ui/components/footer/footer.component';
import { routes } from './app.routes';
import { AppRoutingModule } from './app.routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    WeatherCardContainerComponent,
    HttpClientModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AppRoutingModule,
  ],
})
export class AppComponent {
  title = 'weather-app';
}
