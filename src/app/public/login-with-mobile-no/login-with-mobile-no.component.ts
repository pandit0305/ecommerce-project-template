import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupComponent } from '../signup/signup.component';
import { LoginWithEmailIdComponent } from '../login-with-email-id/login-with-email-id.component';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginWithOtpComponent } from '../login-with-otp/login-with-otp.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { AuthServices } from 'src/app/services/auth/auth.services';
import { map } from 'rxjs';

@Component({
  selector: 'app-login-with-mobile-no',
  templateUrl: './login-with-mobile-no.component.html',
  styleUrls: ['./login-with-mobile-no.component.scss'],
})
export class LoginWithMobileNoComponent implements OnInit {
  isSubmit!: boolean;
  isLoading!: boolean;
  form: any;
  isError!: boolean;
  isOtp!: boolean;
  isShow!: boolean;
  flag: string = "assets/flags/in.png";
  flagDetails: any;
  isOtpMessage:string="";
  countries: any = [
    {
      id: 0,
      flag: "assets/flags/in.png",
      name: "India",
      code: "91",
      countryId: "in"
    },
    {
      id: 0,
      flag: "assets/flags/us.png",
      name: "USA",
      code: "1",
      countryId: "us"
    },
    {
      id: 0,
      flag: "assets/flags/ad.png",
      name: "Andorra",
      code: "9",
      countryId: "ad"
    },
    {
      id: 0,
      flag: "assets/flags/ag.png",
      name: "Antigua and Barbuda",
      code: "12",
      countryId: "ag"
    },
    {
      id: 0,
      flag: "assets/flags/al.png",
      name: "Albania",
      code: "10",
      countryId: "al"
    }
  ]
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private authServices: AuthServices,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      telephone: ['', [Validators.required, this.createEmailPhoneValidator()]],
      otp: ['']
    })
  }
  get telephone() {
    return this.form.controls['telephone'];
  }
  isInvalid(controlName: any) {
    let control = this.form.controls[controlName];
    if (!control) {
      return false;
    }
    return control.invalid && (control.dirty || control.touched || this.isSubmit);
  };

  sendOtp() {
    this.isSubmit = true;
    if (!this.form.valid) {
      return;
    } else {
      this.isLoading = true;
      let payload = {
        type: 4,
        telephone_dial_code: this.flagDetails.code,
        telephone_iso2_code: this.flagDetails.countryId,
        telephone: this.telephone.value
      }
      // this.authServices.loginMobileNoWithOtp(payload).pipe(
      //   map((res: any) => {
      //     console.log(res);
      //     if (res?.statusCode !== 0) {
      //       this.isLoading = false;
      //       this.isOtp = true;
      //       this.isOtpMessage=res?.message;
      //     } else {
      //       this.isLoading = false;
      //       alert(res?.error);
      //     }
      //   })
      // ).subscribe();
    }
  }
  onSubmit() {
    if (this.form.get('otp').value) {
      this.isError = false;
      this.isLoading = true;
      let otp = {
        type: 2,
        otp: this.form.get('otp').value
      }
      // this.authServices.mobileNoOtpVerify(otp).pipe(
      //   map((res: any) => {
      //     if (res?.statusCode !== 0) {
      //       this.isOtp = true;
      //       window.location.reload();
      //       this.router.navigate(['home']);
      //       this.isLoading = false;
      //     } else {
      //       this.isLoading = false;
      //       alert(res?.error);
      //     }
      //   })
      // ).subscribe()
    } else {
      this.isError = true;
    }
  }

  showDropDown() {
    this.isShow = true;
  }
  getCode(code: any) {
    this.isShow = false;
    console.log(code)
    this.flag = code?.flag;
    this.flagDetails = code;
  }

  async openSignupModel() {
    this.modalController.dismiss(null,'loginWithMobile');
    const modal = await this.modalController.create({
      component: SignupComponent
    });
    modal.present();
  }

  async loginWithEmail() {
    this.modalController.dismiss(null, 'loginWithMobile');
    const modal = await this.modalController.create({
      component: LoginWithEmailIdComponent
    });
    modal.present();
  }

  async forgotPassword() {
    this.modalController.dismiss(null);
    const modal = await this.modalController.create({
      component: ForgotPasswordComponent
    });
    modal.present();
  }
  async gotoLogin() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: LoginPage
    });
    modal.present();
  }
  createEmailPhoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      if (typeof Number(value) === 'number' && !isNaN(Number(value))) {
        const phoneNumber = /^[6-9]\d{9}$/.test(value);
        return !phoneNumber ? { emailPhoneValidation: true } : null;
      }

      const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$/.test(value);
      return !email ? { emailPhoneValidation: true } : null;
    };
  }
}
