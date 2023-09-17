import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Urls } from 'src/app/shared/constants/urls';
import { LocalStoreService } from '../localStore/localStore.service';

@Injectable({
    providedIn: 'root',
})
export class AuthServices {
    constructor(private http: HttpClient, private _urls: Urls, private localStore: LocalStoreService) { }

    createAccount(body: any) {
        return this.http.post<any>(this._urls.registration, body).pipe(
            map((res: any) => {
                if (res?.statusCode !== 0) {
                    alert(res?.message);
                    // this.localStore.saveData('OtpToken', res?.data?.token);
                }
                return res;
            })
        );
    }
    accountVerifyOtp(body: any) {
        // return this.http.post<any>(this._urls.registrationVerify, body).pipe(
        //     map((res: any) => {
        //         return res;
        //     }),
        //     catchError(async (error: HttpErrorResponse) => {
        //         let errorMsg = error?.message || '';
        //         if (error?.error instanceof ErrorEvent) {
        //             errorMsg = error?.error?.message;
        //         }
        //         if ([401, 403].includes(error.status)) {
        //             alert(error?.error?.error?.error_description)
        //             localStorage.clear();

        //         }
        //         console.log('connection/server error', error);
        //     })
        // );
    }

    // loginWithEmail
    loginWithEmailAndPassword(body: any) {
        return this.http.post<any>(this._urls.loginWithEmailAndPassword, body).pipe(
            map((res: any) => {
                if (res?.statusCode !== 0) {
                    alert(res?.message);
                    this.localStore.saveData('token', res?.token);
                }
                return res;
            })
        );
    }

    loginWithMobileNoAndPassword(body: any) {
        return this.http.post<any>(this._urls.loginWithMobileAndPassword, body).pipe(
            map((res: any) => {
                if (res?.statusCode !== 0) {
                    alert(res?.message);
                    this.localStore.saveData('token', res?.token);
                }
                return res;
            })
        );
    }

    loginMobileNoWithOtp(body: any) {
        // return this.http.post<any>(this._urls.loginWithMobileNo, body).pipe(
        //     map((res: any) => {
        //         if (res?.statusCode !== 0) {
        //             this.localStore.saveData('OtpToken', res);
        //         }
        //         return res;
        //     })
    
            
        // )
    }

    loginEmailWithOtp(body: any) {
        // return this.http.post<any>(this._urls.loginWithEmail, body).pipe(
        //     map((res: any) => {
        //         if (res?.statusCode !== 0) {
        //             this.localStore.saveData('OtpToken', res);
        //         }
        //         return res;
        //     })
        // );
    }

    emailOtpVerify(body: any) {
        // return this.http.post<any>(this._urls.emailOtpVerify, body).pipe(
        //     map((res: any) => {
        //         return res;
        //     }),
        //     catchError(async (error: HttpErrorResponse) => {
        //         let errorMsg = error?.message || '';
        //         if (error?.error instanceof ErrorEvent) {
        //             errorMsg = error?.error?.message;
        //         }
        //         if ([401, 403].includes(error.status)) {
        //             alert(error?.error?.error?.error_description)
        //             localStorage.clear();

        //         }
        //         console.log('connection/server error', error);
        //     })
        // );
    }

    mobileNoOtpVerify(body: any) {
        // return this.http.post<any>(this._urls.mobileNoOtpVerify, body).pipe(
        //     map((res: any) => {
        //         return res;
        //     }),
        //     catchError(async (error: HttpErrorResponse) => {
        //         let errorMsg = error?.message || '';
        //         if (error?.error instanceof ErrorEvent) {
        //             errorMsg = error?.error?.message;
        //         }
        //         if ([401, 403].includes(error.status)) {
        //             alert(error?.error?.error?.error_description)
        //             localStorage.clear();

        //         }
        //         console.log('connection/server error', error);
        //     })
        // );
    }


    resendOtp() {
        // return this.http.get<any>(this._urls.resendOtp).pipe(
        //     map((res: any) => {
        //         return res;
        //     })
        // );
    }

    // forgot password
    forgotPasswordViaEmail(body: any) {
        // return this.http.post<any>(this._urls.forgotPasswordViaEmail, body).pipe(
        //     map((res: any) => {
        //         return res;
        //     })
        // );
    }
    forgotPasswordViaMobileNo(body: any) {
        // return this.http.post<any>(this._urls.forgotPasswordViaMobileNo, body).pipe(
        //     map((res: any) => {
        //         return res;
        //     })
        // );
    }
    OtpAndSetPassword(body: any) {
        // return this.http.post<any>(this._urls.OtpAndSetPassword, body).pipe(
        //     map((res: any) => {
        //         return res;
        //     }),
        //     catchError(async (error: HttpErrorResponse) => {
        //         let errorMsg = error?.message || '';
        //         if (error?.error instanceof ErrorEvent) {
        //             errorMsg = error?.error?.message;
        //         }
        //         if ([401, 403].includes(error.status)) {
        //             alert(error?.error?.error?.error_description)
        //             localStorage.clear();

        //         }
        //         console.log('connection/server error', error);
        //     })
        // );
    }
}