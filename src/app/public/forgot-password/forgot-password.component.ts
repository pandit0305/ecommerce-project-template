import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoginWithOtpComponent } from '../login-with-otp/login-with-otp.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginWithEmailIdComponent } from '../login-with-email-id/login-with-email-id.component';
import { LoginWithMobileNoComponent } from '../login-with-mobile-no/login-with-mobile-no.component';
import { AuthServices } from 'src/app/services/auth/auth.services';
import { Router } from '@angular/router';
import { LoginPageForm } from '../login/login.page.form';
import { LoginPage } from '../login/login.page';
import { map } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  isShow!: boolean;
  flag: string = "assets/flags/in.png";
  flagDetails: any;
  isOtpMessage: string = "";
  isSuccess:string="";
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
  isSubmit!: boolean;
  isLoading!: boolean;
  isOtp!: boolean;
  form: any;
  isError!: boolean;
  form1: any;
  isLoginwidthmobPassword!: boolean;
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder,
    private router: Router,
    private authServices: AuthServices
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, this.createEmailPhoneValidator()]],
      telephone: ['', [Validators.required, this.createEmailPhoneValidator()]],
      password: ['', [Validators.required, this.createPasswordStrengthValidator()]],
      confirm: ['', [Validators.required]],
      otp: ['']
    },
    {
      validator: this.confirmPasswordValidator("password", "confirm")
    }
    )
  }
  get email() {
    return this.form.controls['email'];
  }
  get telephone() {
    return this.form.controls['telephone'];
  }
  get password() {
    return this.form.controls['password'];
  }
  get confirm() {
    return this.form.controls['confirm'];
  }
  isInvalid(controlName: any) {
    let control = this.form.controls[controlName];
    if (!control) {
      return false;
    }
    return control.invalid && (control.dirty || control.touched || this.isSubmit);
  };
  sendOtp() {
    if (this.email.valid || this.telephone.valid) {
      if (this.email.value !== "") {
        console.log("email")
        this.isLoading = true;
        let payload = {
          type: "email",
          email: this.email.value
        }
        // this.authServices.forgotPasswordViaEmail(payload).pipe(
        //   map((res: any) => {
        //     if (res?.statusCode !== 0) {
        //       this.isOtp = true
        //       this.isLoading = false;
        //       this.isOtpMessage=res?.message;
        //     } else {
        //       this.isOtp = false;
        //       this.isLoading = false;
        //     }
        //   }
        //   )
        // ).subscribe()
      } else {
        console.log("telephone")
        this.isLoading = true;
        let payload = {
          type: "telephone",
          telephone: this.telephone.value,
          telephone_iso2_code: this.flagDetails.countryId,
          telephone_dial_code: this.flagDetails.code
        }
        // this.authServices.forgotPasswordViaMobileNo(payload).pipe(
        //   map((res: any) => {
        //     if (res?.statusCode !== 0) {
        //       this.isOtp = true
        //       this.isLoading = false;
        //       this.isOtpMessage=res?.message;
        //     } else {
        //       this.isOtp = false;
        //       this.isLoading = false;
        //     }
        //   }
        //   )
        // ).subscribe()
      }
    }
    
  }
  onSubmit() {
    console.log(this.password)
    if (this.form.get('otp').value && this.password.valid && this.confirm.valid) {
      this.isError = false;
      this.isLoading = true;
      let payload = {
        otp: this.form.get('otp').value,
        password: this.password.value,
        confirm: this.confirm.value
      }
      // this.authServices.OtpAndSetPassword(payload).pipe(
      //   map((res: any) => {
      //     if (res?.statusCode !== 0) {
      //       this.isSuccess=res?.message;
      //       setTimeout(() => {
      //         this.router.navigate(['home'])
      //         this.isLoading = false;
      //       }, 2000);
      //     }
      //   })
      // ).subscribe()
    }else{
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
  confirmPasswordValidator(password: string, retypePassword: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup?.controls?.[password];
      let matchingControl = formGroup?.controls?.[retypePassword]
      if (
        matchingControl?.errors &&
        !matchingControl?.errors['confirmPasswordValidator']
      ) {
        return;
      }
      if (control?.value !== matchingControl?.value) {
        matchingControl?.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl?.setErrors(null);
      }
    };
  }
  createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasSpecialCharacter = /[^A-Za-z0-9 ]+/.test(value);
      const isMoreThanEight = value.length >= 8;
      const isLessThankTweleve = value.length <= 12;
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter && isMoreThanEight && isLessThankTweleve;
      return !passwordValid ? { passwordStrength: true } : null;
    };
  }
  loginWihmobileAndPassword() {
    this.isLoading = false;
    this.isLoginwidthmobPassword = !this.isLoginwidthmobPassword;
  }
}
