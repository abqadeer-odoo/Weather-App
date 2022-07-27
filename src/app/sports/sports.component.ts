import * as moment from 'moment';
import { Component, OnInit,PipeTransform } from '@angular/core';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];



@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],


})
export class SportsComponent implements OnInit {
  countries = COUNTRIES;
  lahoreMain: string = 'karachi'
  moment: any = moment;
  index:any 
setCricket:any
setFootball:any
setGolf:any
  setAstrnomyData:any
  WeatherData: any;
  constructor(){

  }

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
    fetch(`http://api.weatherapi.com/v1/sports.json?key=d65762d2a6124cb88e8112942222507&q=${location.City ? location.City : this.lahoreMain}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        console.log('weather', data);
        this.setCricket=data.cricket;
        this.setFootball=data.football;
        this.setGolf=data.golf;

      })

    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }
  getWeatherData(location: any) {
    fetch(`http://api.weatherapi.com/v1/sports.json ?key=d65762d2a6124cb88e8112942222507&q=${location.City ? location.City : this.lahoreMain}&aqi=no`)
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