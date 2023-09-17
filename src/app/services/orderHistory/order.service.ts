import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OrderHistoryService {
    usageHistory:any=[
        {
          order:"Cashback for Order ID #67651",
          amount:"0.60",
          date:"04-17-2023",
        },
        {
          order:"Cashback for Order ID #67651",
          amount:"0.60",
          date:"04-17-2023",
        },
        {
          order:"Cashback for Order ID #67651",
          amount:"0.60",
          date:"04-17-2023",
        }
    
      ]
    constructor() { };

    orderHistory(){
        return this.usageHistory.map((res:any, index:any)=>{
            res.id=index+1;
            return res;
        });
    }
}