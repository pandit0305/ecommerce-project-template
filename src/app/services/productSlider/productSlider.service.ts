import { Injectable } from '@angular/core';
import { LocalStoreService } from '../localStore/localStore.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { Urls } from 'src/app/shared/constants/urls';
import {products} from 'src/data';
@Injectable({
  providedIn: 'root',
})
export class ProductSliderService {
  

  constructor(private http: HttpClient, private _urls: Urls, private localStore: LocalStoreService) {
  }

  productSlider() {
    let items = [
      {
        title: 'Popular Product',
        products: products?.data[0]?.products?.popular,
        url: 'popular_product',
      },
      {
        title: 'Get Offer',
        products: products?.data[0]?.products?.offer,
        url: 'in_offer',
      },
      {
        title: 'Best Sellers',
        products: products?.data[0]?.products?.newArrival,
        url: 'best_sellers',
      },
      {
        title: 'Most Rated',
        products: products?.data[0]?.products?.popular,
        url: 'most_rated',
      },
      {
        title: 'New Arrivals',
        products:products?.data[0]?.products?.offer,
        url: 'new_arrivals',
      },
    ];
    return items;
    // return this.http.get<any>(
    //   this._urls.product,
    // ).pipe(
    //   map((res:any)=>{
        
    //     let items = [
    //       {
    //         title: 'Popular Product',
    //         products: res?.data[0]?.products?.popular,
    //         url: 'popular_product',
    //       },
    //       {
    //         title: 'Get Offer',
    //         products: res?.data[0]?.products?.offer,
    //         url: 'in_offer',
    //       },
    //       {
    //         title: 'Best Sellers',
    //         products: res?.data[0]?.products?.newArrival,
    //         url: 'best_sellers',
    //       },
    //       {
    //         title: 'Most Rated',
    //         products: res?.data[0]?.products?.popular,
    //         url: 'most_rated',
    //       },
    //       {
    //         title: 'New Arrivals',
    //         products:res?.data[0]?.products?.offer,
    //         url: 'new_arrivals',
    //       },
    //     ];
    //     return items;
    //   }),
    //   catchError(async (error: HttpErrorResponse) => {
    //     let errorMsg = error?.message || '';
    //     if (error?.error instanceof ErrorEvent) {
    //         errorMsg = error?.error?.message;
    //     }
    //     if ([401, 403].includes(error.status)) {
    //         alert(error?.error?.error?.error_description)
    //         localStorage.clear();

    //     }
    //     console.log('connection/server error', error);
    // })
    // );
  }

}
