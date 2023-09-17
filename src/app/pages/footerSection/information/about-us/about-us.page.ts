import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'information/about-us',title:'About Us'};
  constructor() { }

  ngOnInit() {
  }

}
