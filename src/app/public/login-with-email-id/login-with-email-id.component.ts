import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SignupComponent } from '../signup/signup.component';
import { LoginWithMobileNoComponent } from '../login-with-mobile-no/login-with-mobile-no.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { AuthServices } from 'src/app/services/auth/auth.services';
import { map } from 'rxjs';

@Component({
  selector: 'app-login-with-email-id',
  templateUrl: './login-with-email-id.component.html',
  styleUrls: ['./login-with-email-id.component.scss'],
})
export class LoginWithEmailIdComponent implements OnInit {

  isSubmit!: boolean;
  isLoading!: boolean;
  isOtp!: boolean;
  form: any;
  isError!: boolean;
  isOtpMessage:string="";
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private router: Router,
    private authServices: AuthServices
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, this.createEmailPhoneValidator()]],
      otp: ['']
    })
  }
  get email() {
    return this.form.controls['email'];
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
        type: 2,
        email: this.email.value
      }
      // this.authServices.loginEmailWithOtp(payload).pipe(
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
    let OTP = "123456";
    if (this.form.get('otp').value) {
      this.isError = false;
      this.isLoading = true;
      let otp = {
        type: 1,
        otp: this.form.get('otp').value
      }
      // this.authServices.emailOtpVerify(otp).pipe(
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
  async openSignupModel() {
    this.modalController.dismiss(null, 'login');
    const modal = await this.modalController.create({
      component: SignupComponent
    });
    modal.present();
  }
  async loginWithMobileNo() {
    this.modalController.dismiss(null);
    const modal = await this.modalController.create({
      component: LoginWithMobileNoComponent
    });
    modal.present();
  }
  async forgotPassword() {
    this.modalController.dismiss();
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
