import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselNavigationComponent implements OnInit {

  
  ngOnInit(): void {
  }

  images = [1, 2, 3, 4].map((n) => `assets/images/${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
   config.interval = 10000;
   config.wrap = false;
   config.keyboard = false;
   config.pauseOnHover = false;
  }
 

}
