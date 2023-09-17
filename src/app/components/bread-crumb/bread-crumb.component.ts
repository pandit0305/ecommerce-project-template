import { Component, Input, OnInit, ViewChild  } from '@angular/core';

export interface IBreadCrumbSchema{
  url?:string,
  title:string
}
@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent  implements OnInit {
  @Input() breadCrumbs:IBreadCrumbSchema={url:"", title:""};
  breadCrumbsDetails:any=[];
  maxBreadcrumbs = 4;

  constructor() { }

  ngOnInit() {
    this.breadCrumbsDetails.push(this.breadCrumbs);
  }

  expandBreadcrumbs() {
    this.maxBreadcrumbs = 0;
  }

}
