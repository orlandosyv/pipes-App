import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
//configuration of locale (language)
import localeEsPE from '@angular/common/locales/es-PE';
import localeDeutsch from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPE)
registerLocaleData(localeDeutsch);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
