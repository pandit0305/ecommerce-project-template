import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'information/faqs',title:'FAQS'};
  constructor() { }

  ngOnInit() {
  }

}
