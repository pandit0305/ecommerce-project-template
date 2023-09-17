import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages:any = {};
  isLoading!:boolean;
  isLoading1!: boolean;
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
  ngOnInit(): void {
    this.loadUI();
    
  }

  loadUI(){
    this.isLoading=true;
    setTimeout(() => {
      this.isLoading=false;
    }, 500);  
  }
}
