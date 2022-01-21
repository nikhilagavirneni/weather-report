import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { ForecastWeather } from '../weatherModel';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  zipCode!: string;
  forecastData!: ForecastWeather;
  constructor(
    private activatedroute: ActivatedRoute,
    private weatherService: WeatherService
  ) {
    this.activatedroute.params.subscribe((data) => {
      this.zipCode = data['zipcode'];
    });
  }

  ngOnInit() {
    this.weatherService.getForeCastWeather(this.zipCode).subscribe((data) => {
      if (data) {
        this.forecastData = data;
        this.forecastData.list.forEach((data, i: number) => {
          this.forecastData.list[i].dt_txt = new Date(data.dt * 1000);
        });
      }
    });
  }
}
