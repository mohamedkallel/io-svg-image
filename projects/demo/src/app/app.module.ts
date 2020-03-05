import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SvgImageModule } from 'io-svg-image';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SvgImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
