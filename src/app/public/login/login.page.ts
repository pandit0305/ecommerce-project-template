import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginPageForm, LoginPageForm1 } from "./login.page.form";
import { ModalController } from "@ionic/angular";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";
import { LoginWithMobileNoComponent } from "../login-with-mobile-no/login-with-mobile-no.component";
import { SignupComponent } from "../signup/signup.component";
import { AuthServices } from "src/app/services/auth/auth.services";
import { map } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  form1!: FormGroup;
  submitAttempt!: boolean;
  isLoading!: boolean;
  isRegSuccess!: boolean;
  isLogin: boolean = false;
  isLoader!: boolean;
  isLoginLoader!: boolean;
  isLoginwidthmobPassword: boolean = false;
  flag: string = "assets/flags/in.png";
  flagDetails: any;
  isShow!: boolean;
  countries: any = [
    {
      id: 0,
      flag: "assets/flags/in.png",
      name: "India",
      code: "91",
      countryId: "in",
    },
    {
      id: 0,
      flag: "assets/flags/us.png",
      name: "USA",
      code: "1",
      countryId: "us",
    },
    {
      id: 0,
      flag: "assets/flags/ad.png",
      name: "Andorra",
      code: "9",
      countryId: "ad",
    },
    {
      id: 0,
      flag: "assets/flags/ag.png",
      name: "Antigua and Barbuda",
      code: "12",
      countryId: "ag",
    },
    {
      id: 0,
      flag: "assets/flags/al.png",
      name: "Albania",
      code: "10",
      countryId: "al",
    },
  ];
  constructor(
    private router: Router,
    private authServices: AuthServices,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
    this.form1 = new LoginPageForm1(this.formBuilder).createForm();
  }
  login() {
    this.isLoading = true;
    let auth = this.form.value;
    let auth1 = this.form1.value;
    if(this.isLoginwidthmobPassword){
      if (!this.form1.valid) {
        this.submitAttempt = true;
        return;
      } else {
        this.form.reset();
        let payload = {
          telephone: auth1.telephone,
          password: auth1.password,
        };
        this.authServices
          .loginWithMobileNoAndPassword(payload)
          .pipe(
            map((res: any) => {
              if (res?.statusCode !== 0) {
                window.location.reload();
                this.router.navigate(["home"]);
                this.isLoading = false;
              }
            })
          )
          .subscribe();
      }
    }else{
      if (!this.form.valid) {
        this.submitAttempt = true;
        return;
      } else {
        this.form1.reset();
        let payload = {
          email: auth.email,
          password: auth.password,
        };
        console.log(payload);
        this.authServices
          .loginWithEmailAndPassword(payload)
          .pipe(
            map((res: any) => {
              console.log(res);
              if (res?.statusCode !== 0) {
                window.location.reload();
                this.router.navigate(["home"]);
                this.isLoading = false;
              }
            })
          )
          .subscribe();
      }
    }
 
  }

  showDropDown() {
    this.isShow = true;
  }
  getCode(code: any) {
    this.isShow = false;
    console.log(code);
    this.flag = code?.flag;
    this.flagDetails = code;
  }

  async loginWitOtp() {
    this.modalController.dismiss(null, "login");
    const modal = await this.modalController.create({
      component: LoginWithMobileNoComponent,
    });
    modal.present();
  }

  async openSignupModel() {
    this.modalController.dismiss(null, "login");
    const modal = await this.modalController.create({
      component: SignupComponent,
    });
    modal.present();
  }
  async forgotPassword() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: ForgotPasswordComponent,
    });
    modal.present();
  }
  loginWihmobileAndPassword() {
    this.isLoginwidthmobPassword = !this.isLoginwidthmobPassword;
  }
}
