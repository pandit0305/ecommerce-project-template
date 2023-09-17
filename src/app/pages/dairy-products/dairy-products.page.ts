import { Component, OnInit } from '@angular/core';
import { ProductSliderService } from 'src/app/services/productSlider/productSlider.service';
import { Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-dairy-products',
  templateUrl: './dairy-products.page.html',
  styleUrls: ['./dairy-products.page.scss'],
})
export class DairyProductsPage implements OnInit {
  isBreadVisible = false;
  isMilkVisible = false;
  isEggVisible = false;
  isFlakesVisible = false;
  items: any = []
  constructor(private productSliderService: ProductSliderService, private router: Router) { }

  ngOnInit() {
    this.getProductSlider();
  }

  showBread() {
    this.isBreadVisible = true;
    this.isMilkVisible = false;
    this.isEggVisible = false;
    this.isFlakesVisible = false;
  }

  showEgg() {
    this.isEggVisible = true;
    this.isMilkVisible = false;
    this.isBreadVisible = false;
    this.isFlakesVisible = false;
  }

  showMilk() {
    this.isMilkVisible = true;
    this.isBreadVisible = false;
    this.isEggVisible = false;
    this.isFlakesVisible = false;
  }

  showFlakes() {
    this.isFlakesVisible = true;
    this.isMilkVisible = false;
    this.isBreadVisible = false;
    this.isEggVisible = false;
  }

  getProductSlider() {
    let products = this.productSliderService.productSlider();
    // let item = products.find((res: any) => {
    //   return res.title === 'Dairy Produts';
    // })
    // console.log(item);
    // this.items = item?.product;
  }
}
