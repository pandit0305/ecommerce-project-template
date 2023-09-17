import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment.uat';
// import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class Urls {
    //create account APIs
    public get registration() {
        return `${environment.apiUrl}/createAccount`;
    }
    public get loginWithEmailAndPassword() {
        return `${environment.apiUrl}/login`;
    }
    public get loginWithMobileAndPassword() {
        return `${environment.apiUrl}/loginWithTelephone`;
    }
    public get product(){
        return `${environment.apiUrl}/product`;
    }
}