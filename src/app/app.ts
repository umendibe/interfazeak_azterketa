import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main-component/main-component';
import { ApiService } from './main-component/api-service';

@Component({
  imports: [RouterOutlet, MainComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('interfazeak_azterketa');

}
