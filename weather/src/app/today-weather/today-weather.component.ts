import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit {
 
  lat;
  lan;
  weather;

  constructor(private weatherservice: WeatherService) { }

  ngOnInit() {
    this.getlocation();
  }

  getlocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition(success=>{
        this.lat = success.coords.latitude;
        this.lan = success.coords.longitude;
        
        this.weatherservice.getweatherdata(this.lat , this.lan ).subscribe(data => {this.weather = data;
        
        });
      })
    }

  }


}
