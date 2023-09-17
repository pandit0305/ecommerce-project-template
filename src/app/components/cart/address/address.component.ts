import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  addressForm: any;
  isSubmit!: boolean;
  id!:number;
  saveButtons: any = [{ title: 'Home', id: 1 }, { title: 'Office', id: 2 }, { title: 'Other', id: 3 }];
  constructor(private menuController: MenuController, private router: Router, private fb: FormBuilder) {
    this.initForm()
  }

  ngOnInit() { }
  initForm() {
    this.addressForm = this.fb.group({
      streetAddress: ['', Validators.required],
      gateCode: [''],
      zipCode: ['', Validators.required],
      SuiteOrApt: [''],
      appartmentOrCommunity: [''],
      cityStateCountry: [''],
      addressTypes: ['']
    })
  }
  get streetAddress() {
    return this.addressForm.controls['streetAddress'];
  }
  get zipCode() {
    return this.addressForm.controls['zipCode'];
  }
  onClose() {
    this.menuController.close('end');
  }
  isInvalid(controlName: any) {
    let control = this.addressForm.controls[controlName];
    if (!control) {
      return false;
    }
    return control.invalid && (control.dirty || control.touched || this.isSubmit);
  };
  getAddressCategory(value: any) {
    value.isSelect = true;
    this.id=value.id;
    this.addressForm.patchValue({
      addressTypes: value.title
    })
  }
  gotoCheckout() {
    this.isSubmit = true;
    if (!this.addressForm.valid) {
      console.log(this.addressForm.value)
      alert("Invalid Input")
    } else {
      console.log(this.addressForm.value);
      this.router.navigate(['home/cart/checkout'])
    }
  }
}