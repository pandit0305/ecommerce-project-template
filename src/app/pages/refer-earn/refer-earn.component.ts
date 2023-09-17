import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-refer-earn',
  templateUrl: './refer-earn.component.html',
  styleUrls: ['./refer-earn.component.scss'],
})
export class ReferEarnComponent implements OnInit {
  breadCrumbs: IBreadCrumbSchema = { url: '/home/refer&earn', title: 'Referral Points' };
  referImage = 'assets/image/refer.jpg';
  referCode='12345678';
  inviteIcons: any = [
    {
      icon: 'assets/SocialIcons/facebook.png',
      url: 'https://www.facebook.com',
    },
    {
      icon: 'assets/SocialIcons/twitter.png',
      url: 'https://www.twitter.com',
    },
    {
      icon: 'assets/SocialIcons/whatsapp.png',
      url: 'https://api.whatsapp.com/send?phone=9542212236'
    }
  ]
  constructor() { }

  ngOnInit() { }
  onCopyCode() {
    navigator.clipboard.writeText(this.referCode);
  }
}
