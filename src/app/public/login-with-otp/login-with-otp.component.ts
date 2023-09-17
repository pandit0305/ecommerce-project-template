import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { LoginPage } from '../login/login.page';
import { LoginWithMobileNoComponent } from '../login-with-mobile-no/login-with-mobile-no.component';
import { LocalStoreService } from 'src/app/services/localStore/localStore.service';
import { AuthServices } from 'src/app/services/auth/auth.services';
import { map } from 'rxjs';

@Component({
  selector: 'app-login-with-otp',
  templateUrl: './login-with-otp.component.html',
  styleUrls: ['./login-with-otp.component.scss'],
})
export class LoginWithOtpComponent implements OnInit {
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;
  token = this.localStore.getData('OtpToken');
  isRegSuccess!: boolean;
  isLoader!: boolean;
  isLoginLoader!: boolean;
  isLogin!: boolean;
  isReceivedOtp: string = "";
  expireInTime: any;
  date: any;
  timeStamp!: number;
  constructor(private modalController: ModalController,
     private localStore: LocalStoreService,
     private authServices:AuthServices
     ) { }

  ngOnInit() {
    this.isReceivedOtp = this.token.message;
    this.expireInTime = Number(this.token.data.expires_in);
  }
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: `
      border:1px solid red;
      `,
      input: 'input-class',
      inputFilled: 'filled-class',
      inputDisabled: 'disable-class',
      inputSuccess: 'success-class',
      inputError: 'error-class',
    },
  };
  ngAfterViewInit() {
    const id = setInterval(() => {
      this.timer();
      if (this.timeStamp == 0) {
        clearInterval(id);
      }
    }, 1000);
  }
  timer() {
    this.date = new Date();
    // this.seconds.nativeElement.innerText = this.expireInTime - this.date.getSeconds();
    this.timeStamp = this.expireInTime - this.date.getSeconds();

  }
  handeOtpChange(value:any){
    console.log(value);
  }

  async handleFillEvent(value:any) {
    console.log(value);
    this.isLoader = true;
    if (value) {
      let otp={
        telephone_otp: value
      }
      // this.authServices.accountVerifyOtp(otp).pipe(
      //   map(async (res:any)=>{
      //     if(res?.statusCode !==0){
      //       this.isRegSuccess = true;
      //       this.isLoader = false;
      //       this.isLoginLoader = true;
      //       setTimeout(async () => {
      //         this.modalController.dismiss(null, 'signup');
      //         const modal = await this.modalController.create({
      //           component: LoginPage,
      //         });
      //         modal.present();
      //         this.isLoginLoader = false;
      //       }, 1000);
      //     }else{
      //       this.isLoader = false;
      //       alert(res?.error?.error_description)
      //     }
      //   })
      // ).subscribe()
    } else {
      this.isRegSuccess = false;
      this.isLoader = false;
    }
  }

  async loginWithMobileNo() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: LoginWithMobileNoComponent,
    });
    modal.present();
  }
}
