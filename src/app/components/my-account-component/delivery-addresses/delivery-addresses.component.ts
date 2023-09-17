import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-delivery-addresses',
  templateUrl: './delivery-addresses.component.html',
  styleUrls: ['./delivery-addresses.component.scss'],
})
export class deliveryAddressesComponent implements OnInit {
  @Output() updateAddressEmitter = new EventEmitter<any>();
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
    this.updateAddressEmitter.emit(items);
    this.IsVisible = false;
  }

}
