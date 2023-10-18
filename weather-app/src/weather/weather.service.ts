import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiPrefix: string = 'https://weatherapi-com.p.rapidapi.com/current.json?';

  constructor(private http: HttpClient) { }

  public getWeatherData(location: string): Observable<Object | any> {
    const url = `${this.apiPrefix}q=${location}`;
    const reqHeaders: HttpHeaders = new HttpHeaders ({
      'X-RapidAPI-Key': '557fa0c7b1msh29ce2be9cd239ffp1ae984jsnb6084620e0fb',
		  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    });

    return this.http.request('GET', url, {responseType: 'json', headers: reqHeaders})
  }
}
