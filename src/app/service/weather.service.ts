import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getForeCastForNextFiveDays(searchText:string){
    console.log("get forecast data")
    //'?key=<YOUR_API_KEY>&q=07112&days=7'
    return this._http.get(`${environment.forecastURL}?key=${environment.apiKey}&q=${searchText}&days=7`);
  }

  getJsonData(){
  return this._http.get('../../assets/weather.json')
  }
}
