import { Injectable } from '@angular/core';
import { LocalStoreService } from '../localStore/localStore.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { Urls } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class CheckDeliveryService {

  constructor(private http: HttpClient, private _urls: Urls) {
  }

  checkDelivery(body:any){
    // return this.http.post<any>(
    //   this._urls.deliveryPickupAvailability,body
    // ).pipe(
    //   map((res:any)=>{
    //     return res
    //   }),
    // );
  }

}