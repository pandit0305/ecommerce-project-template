import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStoreService } from './../../services/localStore/localStore.service';
import { RequestItemsService } from 'src/app/services/requestProducts/requestProduct.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notify-request-product',
  templateUrl: './notify-request-product.component.html',
  styleUrls: ['./notify-request-product.component.scss'],
})
export class NotifyRequestProductComponent implements OnInit {
  @Input() item: any;
  @Input() name!: string;
  requestItemFormGroup: any;
  constructor(
    private fb: FormBuilder,
    private requestItemsService: RequestItemsService,
    private localStoreService: LocalStoreService,
    private modalController: ModalController,
  ) {
  }
  ngOnInit() {
    this.requestItemFormGroup = this.fb.group({
      id: [],
      product: [''],
      quantity: [''],
      name: [''],
      email: [''],
      phone: [''],
      comments: [''],
    });
    this.requestItemFormGroup.patchValue({
      product:this.name,
    });
    console.log(this.name);
  }
  async dismiss() {
    const close: string = "modal close";
    await this.modalController.dismiss(close);
  }

  onSubmit() {
    let data = this.localStoreService.getData('requestItem');
    console.log(data);
    if (data != null) {
      let uniqueItem = data.filter((res: any) => {
        return res.product == this.requestItemFormGroup.value.product;
      });
      console.log(uniqueItem);
      if (uniqueItem.length > 0) {
        alert('Already requested.');
      } else {
        this.requestItemsService.requestItems(this.requestItemFormGroup.value);
        alert('Your request is saved.');
      }
    } else {
      this.requestItemsService.requestItems(this.requestItemFormGroup.value);
      alert('Your request is saved.');
    }
  }
}