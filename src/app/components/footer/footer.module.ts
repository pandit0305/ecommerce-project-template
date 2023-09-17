import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
