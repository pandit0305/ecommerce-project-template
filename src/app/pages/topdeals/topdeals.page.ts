import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductSliderService } from 'src/app/services/productSlider/productSlider.service';

@Component({
  selector: 'app-topdeals',
  templateUrl: './topdeals.page.html',
  styleUrls: ['./topdeals.page.scss'],
})
export class TopdealsPage implements OnInit {
  items: any = [];
  constructor(
    private productSliderService: ProductSliderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductSlider();
  }

  getProductSlider() {
    let products = this.productSliderService.productSlider();
    // console.log(products);
    // let item = products.find((res: any) => {
    //   return res.title === 'Top Deals';
    // });

    // this.items = item?.product;
  }
}
