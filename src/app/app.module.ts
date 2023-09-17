import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ApiInterceptor } from './interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent, SideMenuComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}