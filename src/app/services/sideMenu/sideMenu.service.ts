import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  public appPages = {
    items: {
      downloadApp: {
        text: 'Download the App',
        list: [
          {
            image: 'assets/image/googlePlay.png',
            url: 'https://play.google.com/store'
          },
          {
            image: 'assets/image/apple.png',
            url: 'https://www.apple.com/app-store'
          }
        ]
      },
      heading: "Hello!",
      logo: 'assets/logo/logo.png',
      para: 'We take pride in home delivering Indian grocery and varieties of produce of utmost quality at competitive prices. You enjoy family time by avoiding shopping lines, busy parking and gas costs.'
    },
    menus: [
      { title: 'Home', url: '/home', icon: 'home', style: 'list', color: 'danger' },
      { title: 'Check Delivery', id: "open-check-delivery-2x", expand: "block", icon: 'bicycle', style: 'list', color: 'danger', isCheck:true },
      { title: 'Recent Order', url: '/home/recent-order', icon: 'film', style: 'list', color: 'danger' },
      { title: 'Shop By Category', url: '/home/top-deals', icon: 'list', style: 'list', color: 'danger' },
      { title: 'My Account', style: 'list-item', isIcon: false },
      { title: 'My Orders', url: '/home/my-orders', icon: 'cart', style: 'list', color: 'danger' },
      { title: 'MHG Rewards', url: '/home/mhg-rewards', icon: 'medal', style: 'list', color: 'danger' },
      { title: 'My List', url: '/home/myList', icon: 'list-circle', style: 'list', color: 'danger' },
      { title: 'Wishlist', url: '/home/wishlist', icon: 'heart', style: 'list', color: 'danger' },
      { title: 'Refer', url: '/home/refer&earn', icon: 'ribbon', style: 'list', color: 'danger' },
      { title: 'Help & Support', style: 'list-item', isIcon: false },
      { title: 'FAQs/Need Help', url: '/information/faqs', icon: 'help-circle', style: 'list', color: 'danger' },
      { title: 'About Us', url: '/information/about-us', icon: 'home', style: 'list', color: 'danger' },
      { title: 'Contact Us', url: '/information/contact-us', icon: 'call', style: 'list', color: 'danger' },
      { title: 'Return Policy', url: '/information/return-policy', icon: 'newspaper', style: 'list', color: 'danger' },

    ],
  };
  constructor() { }

  sideMenuList() {
    return this.appPages;
  }
}
