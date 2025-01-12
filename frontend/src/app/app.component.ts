import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ApiDataComponent } from './api-data/api-data.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, ApiDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
