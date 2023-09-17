import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-cookies-policy',
  templateUrl: './cookies-policy.page.html',
  styleUrls: ['./cookies-policy.page.scss'],
})
export class CookiesPolicyPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'information/cookies-policy',title:'Cookies Policy'};

  constructor() { }

  ngOnInit() {
  }

}
