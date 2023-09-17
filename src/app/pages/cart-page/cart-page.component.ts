import { AddToCartService } from 'src/app/services/addToCart/addToCart.service';
import { IBreadCrumbSchema } from './../../components/bread-crumb/bread-crumb.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent  implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'/home/cart',title:'Cart'}
  title="Payment Details";
  button="Checkout";
  items:any=[];
  topDeals:any=[];
  constructor(private addToCartService:AddToCartService) { }

  ngOnInit() {
    this.items=this.addToCartService.getCartItem();
    this.topDeals=[
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:1,
        quantity:1,
      },
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:2,
        quantity:1,
      },
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:3,
        quantity:1,
      },
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:4,
        quantity:1,
      },
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:5,
        quantity:1,
      },
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:6,
        quantity:1,
      },
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:7,
        quantity:1,
      },
      {
        title:"Onion",
        image:"/assets/images/onion.jpg",
        description:"",
        price:20,
        weight:"1kg",
        id:8,
        quantity:1,
      }
    ]
  }
  
  get total(){
    return this.items?.map((res:any)=>{
      return res.price * res.quantity
    }).reduce((acc:any, i:any)=>{
      return acc + i;
    },0)
  }
}