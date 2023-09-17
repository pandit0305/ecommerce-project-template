import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Urls } from 'src/app/shared/constants/urls';

@Injectable({
    providedIn: 'root'
})
export class SearchProductService {

    constructor(private http: HttpClient, private _urls: Urls) { }

    searchProduct(body:any) {
        // return this.http.post<any>(this._urls.searchProduct, body).pipe(
        //     map((res: any) => {
        //         return res;
        //     })
        // );
    }
}
