import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.page.html',
  styleUrls: ['./return-policy.page.scss'],
})
export class ReturnPolicyPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'information/return-policy',title:'Return Policy'};

  constructor() { }

  ngOnInit() {
  }

}
