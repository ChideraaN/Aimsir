import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Dayjs } from 'dayjs';
import { Forecast } from './forecast';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public forecast: Forecast = {
    location : '',
    region: '',
    country: '',
    condition: '',
    temperature: '',
    date: ''
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData('london')
    .subscribe(
      value => {
        console.log(value.location);
        console.log(value.current);
        
        this.forecast.location = value.location.name;
        this.forecast.region = value.location.region
        this.forecast.country = value.location.country;
        this.forecast.condition = value.current.condition.text;
        this.forecast.temperature = value.current.temp_c + '°C';
        const currentDate = dayjs( (value.location.localtime).split(" ")).format('dddd, DD MMMM')
        this.forecast.date = currentDate;


        
        console.log(this.forecast);
        
      }
    );
  }
}
