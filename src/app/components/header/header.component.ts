import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from 'src/app/public/login/login.page';
import { ModalController, PopoverController } from '@ionic/angular';
import { SearchProductService } from 'src/app/services/searchItem/searchItem.service';
import { MenuController } from '@ionic/angular';
import { LocationPopOverComponent } from '../location-popover/location-popover.component';
import { CheckDeliveryModalComponent } from '../check-delivery-modal/check-delivery-modal.component';
import { map } from 'rxjs';
import { LocalStoreService } from 'src/app/services/localStore/localStore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  @Output() searchItemEmitter = new EventEmitter<any>();
  @Input() count!: number;
  @Input() location = true;
  @Input() checkDelivery = true;
  @Input() cart = true;
  @Input() login = true;
  @Input() search = true;
  token = this.localStore.getData('token');
  logo = 'assets/logo/logo.png';
  isSearch!: boolean;
  searchProducts: any = [];
  searchItems: any = [];
  isCheckDeliveryOpen: boolean = false;
  public newLocation = localStorage.getItem('location') || "Select Locations";
  screenWidth!: number;
  constructor(private router: Router, private localStore:LocalStoreService,private modalController: ModalController,public popoverController: PopoverController,
    private searchProductService: SearchProductService, private menuCtrl: MenuController
  ) { }
  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    // this.searchProducts = this.searchProductService.searchProduct();
    this.count = 12;
    console.log(this.location)
  }
  getUpdatedLocation(value: any) {
    this.newLocation = value;
  }

  async openLogin() {
    if(this.token){
      window.location.reload();
      this.localStore.removeData('token');
      this.router.navigate(['home'])
    }
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    modal.present();
  }
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    if (query) {
      let payload={
        search:query
      };
      // this.searchProductService.searchProduct(payload).pipe(
      //   map((res:any)=>{
      //     this.isSearch = true;
      //     this.searchProducts = res?.data?.search_suggestions;
      //     console.log(res)
      //   })
      // ).subscribe()
    } else {
      this.isSearch = false
    }
  }

  getSearchItem(item: any) {
    this.router.navigateByUrl(`/single-product/${item.id}`, { state: item });
    this.isSearch = false;
  }

  opnSideMenu() {
    this.menuCtrl.open('rightMenu');
  }
  openCartPop() {
    this.menuCtrl.open('cart-menu');
  }
  gotoHome() {
    this.router.navigate(['home']);
  }

  async  presentPopover(e:any) {
    const popover = await this.popoverController.create({
      component: LocationPopOverComponent,
      event:e
    });
    await popover.present();
  }

  async openCheckDelivery() {
    const modal = await this.modalController.create({
      component: CheckDeliveryModalComponent,
    });
    modal.present();
  }
}