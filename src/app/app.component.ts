import { Component } from '@angular/core';
import {WeatherService} from './service/weather.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'weather-api';
  currentConditionPic:string;
  currentCondition:string;
  currentWindSpeed:string;
  currentPrecip_in:string;
  currentPressure_in:string;
  currentTemp:string;
  location1:string;
  location2:string;
  location3:string;
  weatherForeCast:Object;
  searchText='Bangalore';
  constructor(private _service:WeatherService,
              private _http: HttpClient){
    //this._service.getJsonData()
    //this._service.getForeCastForNextFiveDays(this.searchText)
    this._http.get(`${environment.forecastURL}?key=${environment.apiKey}&q=${this.searchText}&days=7`)
    .subscribe(res=>{
      this.currentConditionPic = res['current']['condition']['icon'];
      this.currentCondition = res['current']['condition']['text'];
      this.currentWindSpeed = res['current']['wind_mph'];
      this.currentPrecip_in = res['current']['precip_in'];
      this.currentPressure_in = res['current']['pressure_in'];
      this.currentTemp= res['current']['temp_f'];
      this.location1 = res['location']['name']
      this.location2 = res['location']['region']
      this.location3 = res['location']['country']
      this.weatherForeCast = res['forecast']['forecastday']
      console.log(this.currentWindSpeed)
      console.log(res)
    })
  }

  getData(searchText:string){
    //this._service.getForeCastForNextFiveDays(searchText)
    this._http.get(`${environment.forecastURL}?key=${environment.apiKey}&q=${searchText}&days=7`)
    .subscribe(res=>{
      this.currentConditionPic = res['current']['condition']['icon'];
      this.currentCondition = res['current']['condition']['text'];
      this.currentWindSpeed = res['current']['wind_mph'];
      this.currentPrecip_in = res['current']['precip_in'];
      this.currentPressure_in = res['current']['pressure_in'];
      this.currentTemp= res['current']['temp_f'];
      this.location1 = res['location']['name']
      this.location2 = res['location']['region']
      this.location3 = res['location']['country']
      this.weatherForeCast = res['forecast']['forecastday']
    })
  }

}
