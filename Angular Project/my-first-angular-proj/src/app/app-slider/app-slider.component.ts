import { Component } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-app-slider',
  templateUrl: './app-slider.component.html',
  styleUrls: ['./app-slider.component.css']
})
export class AppSliderComponent {

  swiper: any;

  ngOnInit(): void {
    // Initialize the Swiper instance after the component is initialized
    this.swiper = new SwiperCore('.swiper-container', {
      slidesPerView: 1,  // Show one slide at a time
      spaceBetween: 10,  // 10px space between slides
      autoplay:{delay:2500,disableOnInteraction:false},
      navigation: {
        nextEl: '.swiper-button-next',  // Link to next button
        prevEl: '.swiper-button-prev',  // Link to prev button
      },
      pagination: {
        el: '.swiper-pagination',  // Enable pagination dots
        clickable: true,
      },
    });
  }
}


