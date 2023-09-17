import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { ProductSliderService } from 'src/app/services/productSlider/productSlider.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {
  isFruitsVisible = false;
  items: any = []
  constructor(private productSliderService: ProductSliderService, private router: Router) { }

  ngOnInit() {
    this.getProductSlider();
  }


  showFruits() {
    this.isFruitsVisible = true;
  }

  getProductSlider() {
    let products = this.productSliderService.productSlider();
    // let item = products.find((res: any) => {
    //   return res.title === 'Fruits';
    // })
    // console.log(item);
    // this.items = item?.product;
  }
}
