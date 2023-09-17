import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { AddToCartService } from 'src/app/services/addToCart/addToCart.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  breadCrumbs: IBreadCrumbSchema = { url: '/wishlist', title: 'Wishlist' };
  favoriteitem: any = [];
  folder!: string;
  isLoading!: boolean;
  recommendeditem: any = [
    {
      title: 'beatroot',
      image: '/assets/images/beatroot.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
      isWishlist: false,
    },
    {
      title: 'califower',
      image: '/assets/images/califower.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
      isWishlist: false,
    },
    {
      title: 'grapes',
      image: '/assets/images/fruits/grapes.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
    },
    {
      title: 'guava',
      image: '/assets/images/fruits/guava.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
    },
    {
      title: 'mango',
      image: '/assets/images/fruits/mango.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
    },
    {
      title: 'muskmelon',
      image: '/assets/images/fruits/muskmelon.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
      isWishlist: false,
    },
    {
      title: 'ghee',
      image: '/assets/images/dairy_products/ghee.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
      isWishlist: false,
    },
    {
      title: 'kefir',
      image: '/assets/images/dairy_products/kefir.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
    },
    {
      title: 'milk',
      image: '/assets/images/dairy_products/milk.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
      isWishlist: false,
    },
    {
      title: 'papaya',
      image: '/assets/images/fruits/papaya.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
      isWishlist: false,
    },
    {
      title: 'pineapples',
      image: '/assets/images/fruits/pineapples.jpg',
      description: '',
      price: 20,
      weight: '200g',
      id: 1,
      quantity: 1,
      isWishlist: false,
    },
  ];
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private wishlistService: WishlistService,
    private router: Router,
    private addToCartService: AddToCartService
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.displayItem();
  }
  displayItem() {
    this.isLoading = true;
    this.getWishList();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  getWishList() {
    this.favoriteitem = this.wishlistService.getWishlistedProduct();
  }
  addToCart(element: any) {
    element.isCart = true;
    element.quantity = 1;
    console.log(this.favoriteitem);
    this.addToCartService.addToCart(element);
  }
  removeFromWishList(item: any) {
    this.wishlistService.removeFromWishlist(item?.title);
    this.getWishList();
  }

  getItems(item: any) {
    if(item?.isWishlist){
      this.getWishList();
    }else{
      this.getWishList();
    }
  }
  getProductItem(singleCardItem: any) {
    this.router.navigateByUrl(`/single-product/${singleCardItem.id}`, { state: singleCardItem });
  }
}