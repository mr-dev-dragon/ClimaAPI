

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-container">
      <h1>Weather Data</h1>
      <div *ngIf="error" class="error">{{ error }}</div>
      <div *ngIf="weatherData; else loading">
        <p>Temperature: {{ weatherData.temperature }}°C</p>
        <p>Condition: {{ weatherData.condition }}</p>
      </div>
      <ng-template #loading>
        <p>Loading weather data...</p>
      </ng-template>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weatherData: any;
  error: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    const url = 'http://127.0.0.1:8000/api/weather/'; // Your Django API endpoint

    this.http.get(url).pipe(
      catchError((error: HttpErrorResponse) => {
        this.error = `Error: ${error.message}`;
        console.error('HTTP Error:', error);
        return of(null); // Graceful error handling
      })
    ).subscribe((data) => {
      if (data) {
        this.weatherData = data;
        console.log('Weather Data:', data);
      }
    });
  }
}
