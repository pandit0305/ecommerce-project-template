import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { IonPopover, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-location-popover',
  templateUrl: './location-popover.component.html',
  styleUrls: ['./location-popover.component.scss'],
})
export class LocationPopOverComponent  implements OnInit {
  @Output() locationEmitter = new EventEmitter<any>();
  newLocation=localStorage.getItem('location') || "DALLAS";
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}
  onChangeLocation(event:any){
    this.newLocation = event.target.value;
    console.log(this.newLocation);
  }
  dismissPopover(){
    this.popoverController.dismiss();
    this.locationEmitter.emit(this.newLocation);
    localStorage.setItem('location', this.newLocation);
    window.location.reload();
  }

}
