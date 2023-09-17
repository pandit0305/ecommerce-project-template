import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonPopover } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  @ViewChild(IonPopover) popOver!: IonPopover;
  options = [
    {
      link1: 'Breakfast Cereals',
      url:""
    },
    {
      link1: 'Fruits',
      url: 'fruits',
    },
    {
      link1: 'Vegetables',
      url: 'vegetables',
    },
    {
      link1: 'Food grains,oils & masala',
    },
    {
      link1: 'Dairy ',
      url: 'dairy-products',
    },
    {
      link1: 'Batters & poultry ',
      url:""
    },
    {
      link1: 'Meat',
      url:""
    },
    {
      link1: 'Beverages',
      url:""
    },
    {
      link1: 'Sweets & Dry fruits',
      url:""
    },
    {
      link1: 'Frozen ',
      url:""
    },
  ];
  dropdownoptions = [
    {
      link: 'Snacks',
      url:""
    },
    {
      link: 'Personal & Home Care',
      url:""
    },
    {
      link: 'Pooja & Festival Items',
      url:""
    },
    {
      link: 'Sports & Miscellaneous',
      url:""
    },
    {
      link: 'Dairy ',
      url: 'dairy-products',
    },
  ];
  screenWidth!: number;

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }
  gotoPages(data: any) {
    this.router.navigate([data?.url]);
  }
  gotoProductPage(data:any){
    this.popOver.dismiss();
    this.router.navigate([data?.url]);
  }

  swiperSlideChanged(e: any) {
    // console.log('changed: ', e);
  }
}