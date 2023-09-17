import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existing-order',
  templateUrl: './existing-order.component.html',
  styleUrls: ['./existing-order.component.scss'],
})
export class ExistingOrderComponent  implements OnInit {
  isDelivery: boolean=false;
  isPickup: boolean=false;
  isTwoHourDelivery: boolean=false;
  title="Delivery Date";
  deliveryDates:any=[
    {
      day:"Today",
      date:"20-07-23",
      time:"10AM - 9PM"
    },
    {
      day:"Tomorrow",
      date:"21-07-23",
      time:"10AM - 9PM"
    },
    {
      day:"Saturday",
      date:"22-07-23",
      time:"10AM - 9PM"
    },
    {
      day:"Sunday",
      date:"23-07-23",
      time:"10AM - 9PM"
    },
    {
      day:"Monday",
      date:"24-07-23",
      time:"10AM - 9PM"
    },
    {
      day:"Tuesday",
      date:"25-07-23",
      time:"10AM - 9PM"
    }
  ]
  constructor() { }

  ngOnInit() {}

  onDelivery(){
    this.isDelivery=true;
    this.isPickup=false;
    this.isTwoHourDelivery=false;
  }
  onPickup(){
    this.isPickup=true;
    this.isDelivery=false;
    this.isTwoHourDelivery=false;
  }
  onTwoHourDelivery(){
    this.isTwoHourDelivery=true;
    this.isPickup=false;
    this.isDelivery=false;
  }
}
