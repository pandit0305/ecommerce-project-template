import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-add-addresses-modal-version2',
  templateUrl: './add-addresses-modal-version2.component.html',
  styleUrls: ['./add-addresses-modal-version2.component.scss'],
})
export class AddAddressesModalVersion2Component implements OnInit {
  form: any = {};
  setsType!: string;
  addAddress: any = [];
  isHome = false;
  isOffice = false;
  isOthers = false;
  others_div: boolean = false;

  homepressed: boolean = false;
  officepressed: boolean = false;
  defaultpressed: boolean = false;
  modelVisible: boolean = true;


  formData: any = {}; // Object to store form data
  addAddressForm: any;
  constructor(private navCtrl: NavController, private addressService: AddressService, private modalController: ModalController,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addAddressForm = this.fb.group({
      name: ['', [Validators.required]],
      gateCode: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      suite: ['', [Validators.required]],
      aptName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      addressType: ['', [Validators.required]]
    })
  }

  makeInVisible() {
    this.modalController.dismiss();
  }

  setType(value: any) {
    this.addAddressForm.patchValue({
      addressType: value
    });
    if (value == "Home") {
      this.isHome = true;
      this.isOffice = false;
      this.isOthers = false;
    } else if (value == "Office") {
      this.isHome = false;
      this.isOffice = true
      this.isOthers = false;
    } else if (value == "") {
      this.isHome = false;
      this.isOffice = false;
      this.isOthers = true;
      this.others_div = true;
    }
  }
  onSaveAddress() {
    if (!this.addAddressForm.valid) {
      alert("Invalid Input");
    } else {
      this.addressService.setData(this.addAddressForm.value)
      this.modalController.dismiss();
      this.addAddress.push(this.addAddressForm.value);
      localStorage.setItem('address', JSON.stringify(this.addAddress))
      console.log(this.addAddressForm.value)
    }
  }

  cancel() {
    this.others_div = false;
  }
}
