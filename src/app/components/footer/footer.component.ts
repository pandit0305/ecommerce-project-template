import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  logo = 'assets/image/apple.png';
  footerContent: any = {
    informationData: {
      title: 'Information',
      information: [
        {
          link1: 'About Us',
          url: '/information/about-us',
        },
        {
          link1:'Blog',
          url:'/information/blog-posts'
        },
        {
          link1: 'FAQs',
          url: '/information/faqs',
        },
        {
          link1: '2 hour Delivery Window',
          url: '/information/two-hr-delivery-window',
        },
        {
          link1: 'Terms and Conditions',
          url: '/information/terms-and-condition',
        },
        {
          link1: 'Return Policy',
          url: '/information/return-policy',
        },
        {
          link1: 'Privacy Policy',
          url: '/information/privacy-policy',
        },
        {
          link1: 'Cookies Policy',
          url: '/information/cookies-policy',
        },
        {
          link1: 'Site Map',
          url: '/information/site-map',
        },
        {
          link1: 'Contact us',
          url: '/information/contact-us',
        },
      ],
    },
    categoriesData: {
      title1: 'Categories',
      title2: 'see all',
      categories: [
        {
          link1: {
            cat:'Vegetables & Fruits',
            url:"/vegetables"
          },
          link2: {
            cat:'Dairy & Breakfast',
            url:"/dairy-products"
          },
          link3: {
            cat:'Munchies',
            url:"/information/about-us"
          },
        },
        {
          link1:{
            cat:'Cold Drinks & Juices',
            url:""
          } ,
          link2:{ 
            cat:'Instant & Frozen Food',
            url:""
          },
          link3:{
           cat:'Tea, Coffee & Health Drinks',
           url:""
          },
        },
        {
          link1: {
            cat:'Bakery & Biscuits',
            url:""
          },
          link2: {
            cat:'Sweet Tooth',
            url:""
          },
          link3: {
            cat:'Atta, Rice & Dal',
            url:""
          }
        },
        {
          link1:{
            cat: 'Dry Fruits, Masala & Oil',
            url:"fruits"
          },
          link2:{
            cat: 'Sauces & Spreads',
            url:""
          },
          link3:{
            cat: 'Chicken, Meat & Fish',
            url:""
          },
        },
        {
          link1:{
            cat: 'Organic & Premium',
            url:""
          },
          link2:{
            cat: 'Paan Corner',
            url:""
          },
          link3:{
            cat: 'Baby Care',
            url:""
          },
        },
        {
          link1:{
            cat: 'Pharma & Wellness',
            url:""
          },
          link2:{
            cat: 'Cleaning Essentials',
            url:""
          },
          link3:{
            cat: 'Home & Office',
            url:""
          },
        },
        {
          link1:{
            cat: 'Personal Care',
            url:""
          },
          link2:{
            cat: 'Ice Creams & Frozen Desserts',
            url:""
          },
          link3:{
            cat: 'Pet Care',
            url:""
          },
        },
        {
          link1:{
            cat: 'Beauty & Cosmetics',
            url:""
          },
          link2:{
            cat: 'Books',
            url:""
          },
          link3:{
            cat: 'Magazines',
            url:""
          },
        },
        {
          link1:{
            cat: 'Toys & Games',
            url:""
          },
          link2:{
            cat: 'Print Store',
            url:""
          },
        },
      ],
    },
    privacyAndSocialMedia: {
      description:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam impedit unde esse labore',
      downloadApp: {
        title: 'Download the App',
        list: [
          {
            image: 'assets/image/googlePlay.png',
            url: 'https://play.google.com/store',
          },
          {
            image: 'assets/image/apple.png',
            url: 'https://www.apple.com/app-store',
          },
        ],
      },
      socialIcons: [
        {
          icon: 'assets/SocialIcons/facebook.png',
          url: 'https://www.facebook.com',
        },
        {
          icon: 'assets/SocialIcons/twitter.png',
          url: 'https://www.twitter.com',
        },
        {
          icon: 'assets/SocialIcons/instagram.png',
          url: 'https://www.instagram.com',
        },
        {
          icon: 'assets/SocialIcons/linkedin.png',
          url: 'https://www.linkedin.com',
        },
        {
          icon: 'assets/SocialIcons/threads.png',
          url: 'https://play.google.com/store/apps/details?id=com.instagram.barcelona&hl=en&gl=US',
        },
      ],
    },
  };

  constructor(private router: Router) { }

  ngOnInit() { }
  gotoPage(data: any) {
    this.router.navigate([data?.url]);
  }
  gotoCatePage(link:any){
    this.router.navigate([link?.url]);
  }
}
