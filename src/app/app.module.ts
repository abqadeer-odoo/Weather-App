import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { ForcastComponent } from './forcast/forcast.component';
import { FullForcastComponent } from './full-forcast/full-forcast.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SportsComponent } from './sports/sports.component';
import { HistroyComponent } from './histroy/histroy.component';
import { FutureComponent } from './future/future.component';
import { AstronomyComponent } from './astronomy/astronomy.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    ForcastComponent,
    FullForcastComponent,
    NavbarComponent,
    SportsComponent,
    HistroyComponent,
    FutureComponent,
    AstronomyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
