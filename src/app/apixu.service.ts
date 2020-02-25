import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  public getWeather(location) {
    const API_KEY = '88702ac0c574f60681415baabea0c5ad';
    return this.http.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=` + location);
  }
}
