import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {
    private userData = {
        firstName : "First Name",
        lastName : "Last Name",
        emailId : "user@gmail.com",
        phoneNumber : "+919988776655"
    }

    sendData(){
        return this.userData;
    }

    upDate(object:any){
        this.userData = object;
    }
}