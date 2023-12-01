import { Component } from '@angular/core';
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent {
  slides = [
    { image: '../../assets/1.jpg', text: 'Slide 1' },
    { image: '../../assets/2.jpeg', text: 'Slide 2' },
    { image: '../../assets/3.jpg', text: 'Slide 3' },
  ];
}
