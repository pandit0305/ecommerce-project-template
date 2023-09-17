import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.page.html',
  styleUrls: ['./site-map.page.scss'],
})
export class SiteMapPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'information/return-policy',title:'Return Policy'};

  constructor() { }

  ngOnInit() {
  }

}
