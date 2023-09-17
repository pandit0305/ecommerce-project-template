import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HeaderModule } from "../components/header/header.module";
import { HomePageRoutingModule } from "./home-routing.module";
import { BannerModule } from "../components/banner/banner.module";
import { FooterModule } from "../components/footer/footer.module";
import { OffersZoneModule } from "../components/offers-zone/offers-zone.module";
import { LoginPage } from "../public/login/login.page";
import { SubHeaderModule } from "../components/sub-header/sub-header.module";
import { SignupComponent } from "../public/signup/signup.component";
import { CategoriesModule } from "../components/categories/categories.module";
import { HomePage } from "./home.page";
import { CartPopoverComponent } from "../components/cart/cart-popover/cart-popover.component";
import { LoginWithOtpComponent } from "../public/login-with-otp/login-with-otp.component";
import { LoginWithEmailIdComponent } from "../public/login-with-email-id/login-with-email-id.component";
import { LoginWithMobileNoComponent } from "../public/login-with-mobile-no/login-with-mobile-no.component";
import { ForgotPasswordComponent } from "../public/forgot-password/forgot-password.component";
import { ProductModule } from "../components/product-card/product.module";
import { ProductSliderModule } from "../components/product-slider/product-slider.module";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage, LoginPage, SignupComponent, CartPopoverComponent, LoginWithOtpComponent, LoginWithEmailIdComponent, LoginWithMobileNoComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    SubHeaderModule,
    BannerModule,
    ProductModule,
    FooterModule,
    CategoriesModule,
    OffersZoneModule,
    ProductSliderModule
  ]
})
export class HomePageModule { }
