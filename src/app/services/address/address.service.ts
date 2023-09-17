import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
  updatedAddress:any= [];

    private addressData =[{
        name:"ramu",
        gateCode:"1",
        zipCode:"123456",
        suite:"mareyo",
        aptName:"jai deva",
        address:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum doloribus culpa recusandae cum, placeat explicabo aliquam aliquid, ad fugiat officiis rerum molestiae in quidem ratione nisi. Mollitia nulla quis dolores quam ullam explicabo recusandae. Mollitia aperiam aspernatur quibusdam sapiente? Commodi vero pariatur ab dolores consequatur modi quas dolor? Excepturi, minus eum repellendus nemo veritatis voluptatum, earum, unde voluptatibus adipisci distinctio animi minima magnam quia culpa ea aspernatur eligendi aut temporibus itaque officiis! Laudantium consequuntur sed voluptatibus repudiandae accusantium excepturi veniam fugiat, repellat quidem corrupti vero quam quo quos rerum a quibusdam eveniet maiores animi molestiae at facere enim nihil.",
        addressType:"home"
    }];

  setData(data: any) {
    this.addressData.push(data);
  }

  getData() {
    return this.addressData;
  }

  updateAddress(body:any){
  
    // localStorage.setItem("address", JSON.stringify(this.updatedAddress))
  }
}