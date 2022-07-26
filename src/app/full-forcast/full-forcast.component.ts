import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-full-forcast',
  templateUrl: './full-forcast.component.html',
  styleUrls: ['./full-forcast.component.css']
})
export class FullForcastComponent implements OnInit {
  lahoreMain: string = 'karachi'
  moment: any = moment;
  index:any 

  setAstrnomyData:any
  WeatherData: any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true
    };
    console.log(this.WeatherData);
    this.getWeatherData(location)
    this.getWeatherNewData(location)
  }
  getWeatherNewData(location: any) {
    fetch(`http://api.weatherapi.com/v1/astronomy.json?key=d65762d2a6124cb88e8112942222507&q=${location.City ? location.City : this.lahoreMain}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        console.log('weather', data);
        this.setAstrnomyData=data;

      })

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }
  getWeatherData(location: any) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=d65762d2a6124cb88e8112942222507&q=${location.City ? location.City : this.lahoreMain}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setWeatherData(data);
      })

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    // let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    // this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    console.log(currentDate);
    let currentTime = moment(currentDate).format("HH")
    let TimeArray = this.WeatherData.forecast.forecastday.map((day: any) => day.hour.map((hour: any) => hour.time))
    let Format = TimeArray[0].map((day: any) => moment(day).format("HH"));
    this.index = Format.indexOf(currentTime)
    console.log(TimeArray, currentTime, this.index, Format)
    // this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    // this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    // this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    // this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    // this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
