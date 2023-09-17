import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  breadCrumbs: IBreadCrumbSchema = { url: '/my-account', title: 'My Account' }

  personData: any = {};
  editItems: any;
  isIconVisible = false;
  showAddressValue = false;
  myOrderesVisible = false;
  cartVisible = false;
  wishListVisible = false;
  returnsVisible = false;
  signOutVisible = false;

  constructor(private userinfoService: UserInfoService, private router: Router) {
    this.personData = userinfoService.sendData();
    console.log(this.personData);
    console.log(this.personData.firstName);
  }

  ngOnInit() {

  }

  showInfo() {
    this.isIconVisible = true;
    this.showAddressValue = false;
    this.myOrderesVisible = false;
    this.cartVisible = false;
    this.wishListVisible = false;
    this.returnsVisible = false;
    this.signOutVisible = false;
  }

  showMyOrderes() {
    this.myOrderesVisible = true
    this.isIconVisible = false;
    this.showAddressValue = false;
    this.cartVisible = false;
    this.wishListVisible = false;
    this.returnsVisible = false;
    this.signOutVisible = false;

    this.router.navigate(['/my-orders']);
  }

  showCart() {
    this.cartVisible = true;
    this.myOrderesVisible = false;
    this.isIconVisible = false;
    this.showAddressValue = false;
    this.wishListVisible = false;
    this.returnsVisible = false;
    this.signOutVisible = false;

    this.router.navigate(['home/cart']);
  }

  showWishList() {
    this.wishListVisible = true;
    this.cartVisible = false;
    this.myOrderesVisible = false;
    this.isIconVisible = false;
    this.showAddressValue = false;
    this.returnsVisible = false;
    this.signOutVisible = false;

    this.router.navigate(['wishlist']);
  }

  showAddress() {
    this.showAddressValue = true;
    this.isIconVisible = false;
    this.myOrderesVisible = false;
    this.cartVisible = false;
    this.wishListVisible = false;
    this.returnsVisible = false;
    this.signOutVisible = false;
  }

  showReturns() {
    this.returnsVisible = true;
    this.showAddressValue = false;
    this.isIconVisible = false;
    this.myOrderesVisible = false;
    this.cartVisible = false;
    this.wishListVisible = false;
    this.signOutVisible = false;
  }

  showSignOut() {
    this.signOutVisible = true;
    this.returnsVisible = false;
    this.showAddressValue = false;
    this.isIconVisible = false;
    this.myOrderesVisible = false;
    this.cartVisible = false;
    this.wishListVisible = false;
  }

  getAddress(items: any) {
    console.log(items)
    this.editItems = items;
  }
  
}
