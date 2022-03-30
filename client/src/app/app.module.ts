import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { Hangboard1Component } from './hangboard1/hangboard1.component';
import { YourworkoutsComponent } from './yourworkouts/yourworkouts.component';
import { BrowseworkoutsComponent } from './browseworkouts/browseworkouts.component';
import { CreateworkoutComponent } from './createworkout/createworkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    Hangboard1Component,
    YourworkoutsComponent,
    BrowseworkoutsComponent,
    CreateworkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
