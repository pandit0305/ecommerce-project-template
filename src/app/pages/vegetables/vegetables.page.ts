import { Component, OnInit } from '@angular/core';
import { ProductSliderService } from 'src/app/services/productSlider/productSlider.service';
import { Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.page.html',
  styleUrls: ['./vegetables.page.scss'],
})
export class VegetablesPage implements OnInit {
  items:any= []
  constructor(private productSliderService:ProductSliderService, private router: Router) { }

  ngOnInit() {
    this.getProductSlider();
    
  }

  getProductSlider(){
    // let products  = this.productSliderService.productSlider();
    // console.log(products);
    // let item = products.find((res:any)=>{
    //  return res.title === 'Fresh Vegetables';
    // })
    // this.items = item?.product;
  }
}
