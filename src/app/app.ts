import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Items } from './items/items';

@Component({
  selector: 'app-root',
  imports: [Header, Items],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myAngularApp');
}
