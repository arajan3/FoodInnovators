import { NONE_TYPE } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-test-slider',
  templateUrl: './test-slider.component.html',
  styleUrls: ['./test-slider.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TestSliderComponent {

}
