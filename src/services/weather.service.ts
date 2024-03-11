import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(latitude:any, longitude:any): Observable<any> {
    const url = 'https://localhost:7124/api/weather/?Latitude=' + latitude + '&Longitude=' + longitude;
    return this.http.get(url);
  }
}
