import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Urls } from 'src/app/shared/constants/urls';
import { LocalStoreService } from '../localStore/localStore.service';

@Injectable({
    providedIn: 'root',
})
export class BannerService {
    items:any=[
        {
            image:"assets/slider/slider1.png"
        },
        {
            image:"assets/slider/slider1.png"
        },
        {
            image:"assets/slider/slider1.png"
        },
        {
            image:"assets/slider/slider1.png"
        },
        {
            image:"assets/slider/slider1.png"
        },
        {
            image:"assets/slider/slider1.png"
        }
    ]
    constructor(private http: HttpClient, private _urls: Urls, private localStore: LocalStoreService) { }

    bannerSlider(){
        return this.items;
        // return this.http.get<any>(this._urls.homePage).pipe(
        //     map((res: any) => {
        //         return res?.data?.banner;
        //     })
        // );
    }
}