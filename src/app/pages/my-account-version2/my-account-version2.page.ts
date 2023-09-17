import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';

@Component({
  selector: 'app-my-account-version2',
  templateUrl: './my-account-version2.page.html',
  styleUrls: ['./my-account-version2.page.scss'],
})
export class MyAccountVersion2Page implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'/my-account-version2',title:'My Account Version-2'}

  personDataV2:any = {};
  isIconVisible = false;
  showAddressValue = false;
  myOrderesVisible = false;
  showMGHValue = false;
  showSignValue = false;
  editItems:any;
  
  constructor(private userInfoService : UserInfoService) { 
    this.personDataV2 = userInfoService.sendData();
  }

  ngOnInit() {
  }

  showInfo() {
    this.isIconVisible = true;
    this.showAddressValue = false;
    this.myOrderesVisible = false;
    this.showMGHValue = false;
    this.showSignValue = false;
  }
  showMyOrders() {
    this.isIconVisible = false;
    this.showAddressValue = false;
    this.myOrderesVisible = true;
    this.showMGHValue = false;
    this.showSignValue = false;
  }

  showAddress() {
    this.isIconVisible = false;
    this.showAddressValue = true;
    this.myOrderesVisible = false;
    this.showMGHValue = false;
    this.showSignValue = false;
  }

  showMHG(){
    this.isIconVisible = false;
    this.showAddressValue = false;
    this.myOrderesVisible = false;
    this.showMGHValue = true;
    this.showSignValue = false;
  }

  showSignOut() {
    this.isIconVisible = false;
    this.showAddressValue = false;
    this.myOrderesVisible = false;
    this.showMGHValue = false;
    this.showSignValue = true;
  }
  getAddress(items:any){
    console.log(items)
    this.editItems =items;
  }

}