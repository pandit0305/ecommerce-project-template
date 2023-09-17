import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() { }
  public saveData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    let data:any = localStorage.getItem(key);
    return JSON.parse(data);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
