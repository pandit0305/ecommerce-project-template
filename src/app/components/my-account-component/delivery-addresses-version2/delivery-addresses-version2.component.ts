import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-delivery-addresses-version2',
  templateUrl: './delivery-addresses-version2.component.html',
  styleUrls: ['./delivery-addresses-version2.component.scss'],
})
export class DeliveryAddressesVersion2Component implements OnInit {
  
  @Output() updateAddressVersion2Emitter = new EventEmitter<any>();

  deliveyAddressObjects!: any[];
  IsVisible: boolean = false;
  elementType!: string;

  constructor(private addressService: AddressService) {
    this.deliveyAddressObjects = addressService.getData();
  }

  ngOnInit() { }

  deleteAddress(i: number) {
    const updatedDeliveyAddressObjects = this.deliveyAddressObjects.slice();
    updatedDeliveyAddressObjects.splice(i, 1);
    this.deliveyAddressObjects = updatedDeliveyAddressObjects;
  }

  IsEditVisible: boolean = false;

  editAddress(items: any) {

    this.IsEditVisible = true;
    this.updateAddressVersion2Emitter.emit(items)
    this.IsVisible = false;
    
  }

  addAddress() {

  }

}
