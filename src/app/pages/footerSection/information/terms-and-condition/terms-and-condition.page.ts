import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.page.html',
  styleUrls: ['./terms-and-condition.page.scss'],
})
export class TermsAndConditionPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'information/terms-and-condition',title:'Terms and Condition'};
  constructor() { }

  ngOnInit() {
  }

}
