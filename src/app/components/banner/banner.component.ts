import { register } from 'swiper/element/bundle';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
import { map } from 'rxjs';

register();
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  sliders: any = [];
  isLoading = false;
  image="https://dallas.myhomegrocers.com/image/cache/catalog/banners/sep-23/01-09-23-web-banner-1150x500.png"
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.showBanners();
  }

  swiperSlideChanged(e: any) {

  }
  showBanners() {
    this.sliders = this.bannerService.bannerSlider();
    // this.bannerService.bannerSlider().pipe(
    //   map((res:any)=>{
    //     console.log("banner data",res)
    //     // this.sliders=res;
    //   })
    // ).subscribe()
    // this.isLoading = true;

    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
  }

}