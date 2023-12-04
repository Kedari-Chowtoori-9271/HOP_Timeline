import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {SlickCarouselComponent} from 'ngx-slick-carousel'
declare var $: any;  

  @Component({
    selector: 'app-home-carousel',
    templateUrl: './home-carousel.component.html',
    styleUrls: ['./home-carousel.component.scss'],
  })
export class HomeCarouselComponent implements OnInit, AfterViewInit {
 @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  ngAfterViewInit() {
  }
  ngOnInit(): void {
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
  autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, "infinite": true,
  "dots": true,
  "autoplay": true,
  "autoplaySpeed": 2000  };
    
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
  }
  
  breakpoint(e:any) {
  }
  
  afterChange(e:any) {
  }
  
  beforeChange(e:any) {
  }
}

