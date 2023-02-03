import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'innovatorsfood';

  constructor() {
    // register Swiper custom elements
    register();
  }
}
