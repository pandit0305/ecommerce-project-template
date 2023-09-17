import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-edit-address-modal-version2',
  templateUrl: './edit-address-modal-version2.component.html',
  styleUrls: ['./edit-address-modal-version2.component.scss'],
})
export class EditAddressModalVersion2Component implements OnInit {
  @Input() items: any;
  updatedAddress: any = [];
  form: any = {};
  setsType!: string;
  others_div: boolean = false;


  isHome = false;
  isOffice = false;
  isOthers = false

  homepressed: boolean = false;
  officepressed: boolean = false;
  defaultpressed: boolean = false;
  modelVisible: boolean = true;


  formData: any = {}; // Object to store form data
  addAddressForm: any;
  constructor(private addressService: AddressService, private modalController: ModalController,
    private fb: FormBuilder) {
    this.initForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'].currentValue) {
      let data = changes['items'].currentValue;
      this.addAddressForm.patchValue(data)
    }
  }
  ngOnInit() {
    console.log(this.items)
  }
  initForm() {
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
  onUpdateAddress() {
    if (!this.addAddressForm.valid) {
      alert("Invalid Input");
    } else {
      this.modalController.dismiss();
      console.log(this.addAddressForm.value)
      this.updatedAddress.push(this.addAddressForm.value);
      localStorage.setItem("address", JSON.stringify(this.updatedAddress))
    }
  }

  cancel() {
    this.others_div = false;
  }

}
