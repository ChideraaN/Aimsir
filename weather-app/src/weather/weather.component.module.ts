import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [],
  exports: [WeatherComponent],
  providers: [WeatherService],
  bootstrap: [WeatherComponent]
})
export class WeatherModule { }
