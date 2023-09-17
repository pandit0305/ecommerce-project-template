import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})

export class SingleProductPage implements OnInit {
  isAdd = false;
  item: any = this.location.getState();
  breadCrumbs: IBreadCrumbSchema = { url: `/single-product/${this.item.id}`, title: `${this.item.title}-${this.item.weight}` }
  items: any = [
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 1,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 2,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 3,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 4,
      quantity: 1,
    },
  ];
  topDeals = [
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 1,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 2,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 3,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 4,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 5,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 6,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 7,
      quantity: 1,
    },
    {
      title: "Onion",
      image: "/assets/images/onion.jpg",
      description: "",
      price: 20,
      weight: "1kg",
      id: 8,
      quantity: 1,
    }
  ]
  ratings: any = [
    {
      rating: "5",
      star: 'star',
      percent: "0%"
    },
    {
      rating: "4",
      star: 'star',
      percent: "0%"
    },
    {
      rating: "3",
      star: 'star',
      percent: "0%"
    },
    {
      rating: "2",
      star: "star",
      percent: "0%"
    },
    {
      rating: "1",
      star: "star",
      percent: "0%"
    }
  ]
  screenWidth!: number;
  constructor(private router: Router, private location: Location) { }

  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    console.log(this.item);
  }
  addToCart() {
    this.isAdd = true;
  }
  onChangeReview(event: any) {

  }
  onMouseMove(event: any, item: any) {
    let img: any = document.getElementById('img-z');
    let preview: any = document.querySelector<HTMLElement>(".magnify-img");
    if(this.screenWidth < 425){
    preview.style.display = "done";
    }
    preview.style.display = "block";
    let x = preview.offsetWidth / 100;
    let y = preview.offsetHeight / 100;
    preview.style.backgroundImage = `url(${item?.image})`;
    preview.style.backgroundSize = img.width * x +
      "px " + img.height * y + "px";
    let posX = event.offsetX;
    let posY = event.offsetY;
    preview.style.backgroundPosition = "-" + posX * x +
      "px -" + posY * y + "px";
  }
  onMouseOut() {
    let preview: any = document.querySelector<HTMLElement>(".magnify-img");
    preview.style.display = "none";
  }
}