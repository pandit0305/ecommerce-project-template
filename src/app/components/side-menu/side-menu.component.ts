import { ModalController } from "@ionic/angular";
import { SideMenuService } from "./../../services/sideMenu/sideMenu.service";
import { Component, OnInit } from "@angular/core";
import { LoginPage } from "src/app/public/login/login.page";
import { CheckDeliveryModalComponent } from "../check-delivery-modal/check-delivery-modal.component";
import { LocalStoreService } from "src/app/services/localStore/localStore.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit {
  token = this.localStore.getData("token");
  appPages: any = [];
  screenWidth!: number;
  constructor(
    public sideMenuService: SideMenuService,
    private router: Router,
    private localStore: LocalStoreService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.appPages = this.sideMenuService.sideMenuList();
  }
  async signIn() {
    if (this.token) {
      window.location.reload();
      this.localStore.removeData("token");
      this.router.navigate(["home"]);
    }
    this.modalController.dismiss(null, "signup");
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    modal.present();
  }
  async openCheckDelivery(event: any) {
    if (event === true) {
      const modal = await this.modalController.create({
        component: CheckDeliveryModalComponent,
      });
      modal.present();
    }
  }
}
