import { CarouselModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './Modules/material.module';

import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FooterComponent } from './footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    CarousalComponent,
    FooterComponent   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
