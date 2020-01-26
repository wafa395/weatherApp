import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
   apikey = environment.apikey;
   url = environment.url;

  constructor(private http: HttpClient) { }

  getweatherdata(lat ,lon){
    let params = new HttpParams()
        .set('lat' , lat)
        .set('lon' , lon)
        .set('unit' , 'imperial')
        .set('appId' , this.apikey)

    return this.http.get(this.url , {params});
  }

  
}
