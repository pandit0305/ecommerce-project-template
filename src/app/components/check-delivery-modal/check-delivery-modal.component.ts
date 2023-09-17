import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { CheckDeliveryService } from 'src/app/services/checkDelivery/checkDelivery.service';

@Component({
  selector: 'app-check-delivery-modal',
  templateUrl: './check-delivery-modal.component.html',
  styleUrls: ['./check-delivery-modal.component.scss'],
})
export class CheckDeliveryModalComponent implements OnInit {
  public zipCode: string = "";
  public isLoading!: boolean;
  public isMessage:string="";
  public isError!: boolean;
  public isZipCode!: boolean;
  productDeliveryTime: any = [
    {
      lable: "Delivery Days",
      value: "Wednesday & Friday"
    },
    {
      lable: "Time",
      value: "10AM to 9PM"
    }
  ];
  shoppingRatesInfo: any = {
    heading: "Shiping rates info",
    shoppingRates: [
      {
        lable: "Min. order amount",
        value: "0"
      },
      {
        lable: "Max. order amount",
        value: "50"
      },
      {
        lable: "Shipping rates",
        value: "3.99"
      }
    ]
  }
  constructor(private checkDeliveryService: CheckDeliveryService) { }

  ngOnInit() { }
  // 750016
  checkDeliveryStatus() {
    this.isLoading = true;
    if (this.zipCode.length > 0) {
      this.isError = false;
      let payload = {
        serving_area_postcode: this.zipCode
      }
      // this.checkDeliveryService.checkDelivery(payload).pipe(
      //   map((res: any) => {
      //     console.log(res)
      //     if(res?.statusCode !==0){
            
      //     }
      //     this.isLoading = false;
      //   }),
      //   catchError(async (error: HttpErrorResponse) => {
      //     let errorMsg = error?.message || '';
      //     if (error?.error instanceof ErrorEvent) {
      //         errorMsg = error?.error?.message;
      //     }
      //     if ([400, 401, 403].includes(error.status)) {
      //        this.isMessage=error?.error?.error[0]
      //         localStorage.clear();
      //     }
      //     console.log('connection/server error', error);
      //     this.isLoading = false;
      // })
      // ).subscribe()
    } else {
      this.isLoading = false;
      this.isError = true;
    }
  }
}
