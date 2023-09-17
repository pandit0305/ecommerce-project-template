import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details-component',
  templateUrl: './order-details-component.component.html',
  styleUrls: ['./order-details-component.component.scss'],
})
export class OrderDetailsComponentComponent  implements OnInit {

  @Input() rowNumber:any;
  makeColor!:boolean
  isVisibility:boolean = false;
  constructor() { 
  }

  ngOnInit() {
    if(this.rowNumber.orderStatus == 'ordered'){
      this.makeColor = true 
    }
    else{
      this.makeColor = false
    }
  }

  showOrders(){
    this.isVisibility = true;
  }

}
