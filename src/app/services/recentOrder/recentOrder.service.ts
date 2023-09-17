import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentOrderService {
  recentOrderProducts: any = [
    {
      orderId: "#67508",
      title: "ayran",
      image: "/assets/images/dairy_products/ayran.jpg",
      description: "",
      price: 20,
      weight: "200g",
      id: 1,
      quantity: 1,
    },
    {

      orderId: "#67508",
      title: "cucumber",
      image: "/assets/images/cucumber.jpg",
      description: "",
      price: 20,
      weight: "200g",
      id: 8,
      quantity: 1,
    },
    {
      orderId: "#67508",
      title: "garlic",
      image: "/assets/images/garlic.jpg",
      description: "",
      price: 20,
      weight: "200g",
      id: 9,
      quantity: 1,
      outOfStock:true
    }
  ]
  constructor() { };

  recentOrder() {
    return this.recentOrderProducts;
  }
}