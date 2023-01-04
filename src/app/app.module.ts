import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppearingDirective } from './gsap/appearing.directive';
import { SplitterDirective } from './gsap/splitter.directive';
import { ScrollingDirective } from './gsap/scrolling.directive';
import { OglDirective } from './gsap/ogl.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, AppearingDirective, SplitterDirective, ScrollingDirective, OglDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
