import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { AddressService } from 'src/app/services/address/address.service';

@Component({
  selector: 'app-add-address-modal',
  templateUrl: './add-address-modal.component.html',
  styleUrls: ['./add-address-modal.component.scss'],
})
export class AddAddressModalComponent implements OnInit {
  form: any = {};
  setsType!: string;
  addAddress: any = [];
  isHome = false;
  isOffice = false;
  isOthers = false;
  others_div:boolean = false;

  homepressed: boolean = false;
  officepressed: boolean = false;
  defaultpressed: boolean = false;
  modelVisible: boolean = true;


  formData: any = {};
  addAddressForm: any;
  id!:number;
  saveButtons: any = [{ title: 'Home', id: 1 }, { title: 'Office', id: 2 }, { title: 'Other', id: 3 }];
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
    value.isSelect=true;
    this.id = value.id;
    this.addAddressForm.patchValue({
      addressType: value.title
    });
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
  
  cancel(){
    this.others_div = false;
  }
}
