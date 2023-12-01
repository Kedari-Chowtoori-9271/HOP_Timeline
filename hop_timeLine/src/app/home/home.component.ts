import { Component, OnInit } from '@angular/core';  
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    $('.slickSlider').slick({
      dots: true,
      infinite: true,
      speed: 700,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  
}
