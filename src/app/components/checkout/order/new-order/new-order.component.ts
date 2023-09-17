import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent  implements OnInit {
  @Output() addTipEmitter=new EventEmitter<any>();
  isDelivery: boolean=false;
  isPickup: boolean=false;
  isTwoHourDelivery: boolean=false;
  checkoutFormGroup: any;
  title="Pickup Date";
  constructor(private fb:FormBuilder) {
    this.initForm();
   }

  ngOnInit() {}
  initForm(){
    this.checkoutFormGroup=this.fb.group({
      addTip:[false],
      customTip:['']
    })
  }
  onClear(){
    this.checkoutFormGroup.reset();
  }
  addTip(){
    let tip = this.checkoutFormGroup.value;
    this.addTipEmitter.emit(tip);
  }
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
