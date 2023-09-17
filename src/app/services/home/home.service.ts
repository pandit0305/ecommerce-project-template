import { Injectable } from '@angular/core';
import { LocalStoreService } from '../localStore/localStore.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { Urls } from 'src/app/shared/constants/urls';
import { products } from 'src/data';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  items:any=[];
  constructor(private http: HttpClient, private _urls: Urls, private localStore: LocalStoreService) {
  }

  getCateGories(){
    this.items = products?.data;
    return this.items;
    // return this.http.get<any>(
    //   this._urls.product,
    // ).pipe(
    //   map((res:any)=>{
    //     return res?.data;
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