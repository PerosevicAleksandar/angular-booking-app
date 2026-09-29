import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalonComponent } from './salon-component/salon-component';

@Component({
  imports: [RouterOutlet, SalonComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('booking-app');
}
