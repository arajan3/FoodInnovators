import { Component, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-test-slider1',
  templateUrl: './test-slider1.component.html',
  styleUrls: ['./test-slider1.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TestSlider1Component {

}
