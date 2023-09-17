import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent  implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'/home/cart/checkout',title:'Checkout'};
  title="Order Summary";
  button="Make Payment";
  items=[
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
    }
  ];
 
  total:any=0;
  isExistingOrder:boolean=false;
  isNewOrder:boolean=false;
  isZipCode:boolean=false;

  constructor() { }

  ngOnInit() {
    this.total = Number(localStorage.getItem('total'));
  }
  onExistingOrder(){
    this.isExistingOrder= true;
    this.isNewOrder=false;
  }
  onNewOrder(){
    this.isNewOrder=true;
    this.isExistingOrder= false;
    this.isZipCode=false;
  }

  onChangeZipCode(event:any){
    if(event.target.value){
      this.isZipCode=true;
    }else{
      this.isZipCode=false;
    }
  }
  getTip(tip:any){
    console.log(tip)
    if(tip?.addTip !== false && tip?.addTip !== null){
      if(tip?.addTip=="5"){
        this.total += Number(tip?.addTip);
        alert("Tip $5 is added.");
      }else{
        this.total += Number(tip?.addTip);
        alert("Tip $10 is added.");
      }
    }else if (tip?.customTip !=='' && tip?.customTip !==null){
      this.total += Number(tip?.customTip);
      alert("Thank you for this tips.");
    }else{
      alert("No tips are selected.")
    }
  }

  getRewards(rewards:any){
    if(rewards){
      this.total += rewards;
    }
  }
  getCouponDiscount(value:number){
    console.log(value);
    if(value){
      this.total -= value;
      alert("Hurray! You save $10.");
    }
  }
}
