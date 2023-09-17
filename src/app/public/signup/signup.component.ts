import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { LoginWithOtpComponent } from '../login-with-otp/login-with-otp.component';
import { map } from 'rxjs';
import { AuthServices } from 'src/app/services/auth/auth.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupFormGroup: any;
  isSubmit!: boolean;
  isLoading!: boolean;
  isShow!: boolean;
  flag: string = "assets/flags/in.png";
  flagDetails: any;
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
    private fb: FormBuilder,
     private authService:AuthServices,
     private router: Router, 
     private modalController: ModalController
     ) {
    this.initForm()
  }
  ngOnInit() { }

  onSubmit(model: any) {
    console.log(model);
  }
  initForm() {
    this.signupFormGroup = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      telephone: ['', [Validators.required, this.createEmailPhoneValidator()]],
      email: ['', [Validators.required, this.createEmailPhoneValidator()]],
      password: ['', [Validators.required, this.createPasswordStrengthValidator()]],
      confirm: ['', [Validators.required]],
      referral_code: ['', [Validators.required]],
      telephone_iso2_code: [''],
      telephone_dial_code: [''],
    },
      {
        validator: this.confirmPasswordValidator("password", "confirm")
      }
    )
  }
  get telephone() {
    return this.signupFormGroup.controls['telephone'];
  }
  get email() {
    return this.signupFormGroup.controls['email'];
  }
  get confirm() {
    return this.signupFormGroup.controls['confirm'];
  }
  get password() {
    return this.signupFormGroup.controls['password'];
  }
  isInvalid(controlName: any) {
    let control = this.signupFormGroup.controls[controlName];
    if (!control) {
      return false;
    }
    return control.invalid && (control.dirty || control.touched || this.isSubmit);
  };

  async signup() {
    this.isSubmit = true;
    if (!this.signupFormGroup.valid) {
      return;
    } else {
      this.isLoading = true;
      let form = this.signupFormGroup.value;
      delete form.checkbox;
      let payload = {
        ...form,
        telephone_iso2_code: this.flagDetails.countryId,
        telephone_dial_code: this.flagDetails.code,
      }
      console.log(payload)
      this.authService.createAccount(payload).pipe(
        map(async (res: any) => {
          if(res?.statusCode !==0){
            this.modalController.dismiss(null, 'signup');
            const modal = await this.modalController.create({
              component: LoginPage,
            });
            modal.present();
            this.isLoading = false;
          }else{
            console.log(res);
            alert(res?.error[0]);
            this.isLoading=false;
          }
        })
      ).subscribe()
    }
  }
  async gotoLogin() {
    this.modalController.dismiss(null, 'signup');
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    modal.present();
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
}
