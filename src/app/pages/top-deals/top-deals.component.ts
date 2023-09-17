import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss'],
})
export class TopDealsComponent  implements OnInit {
  items:any=[]
  constructor() { }
  ngOnInit() {
    this.items=[]
    console.log(this.items)
  }
}
