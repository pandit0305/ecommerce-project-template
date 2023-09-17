import { Injectable } from '@angular/core';
import { LocalStoreService } from '../localStore/localStore.service';
@Injectable({
    providedIn: 'root'
})
export class RequestItemsService {
    requestProducts:any=[];
    constructor(private localStoreService:LocalStoreService) { };

    requestItems(body:any){
     this.requestProducts.push(body);
     this.localStoreService.saveData('requestItem',this.requestProducts);
    }
}