import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-mode',
  templateUrl: './delivery-mode.component.html',
  styleUrls: ['./delivery-mode.component.scss'],
})
export class DeliveryModeComponent  implements OnInit {
  @Input() title:string="Delivery Date";
  @Input() selectTime=false;
  @Input() calender=false;
  isDelivery: boolean=false;
  isPickup: boolean=false;
  isTwoHourDelivery: boolean=false;
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
