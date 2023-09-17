import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'information/contact-us',title:'Contact Us'};

  constructor() { }

  ngOnInit() {
  }

}
