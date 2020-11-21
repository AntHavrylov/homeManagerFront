import { Component, OnInit } from '@angular/core';
import { SocketIOClientService } from 'src/app/services/socketIOClient/socket-ioclient.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-weather-broadcast',
  templateUrl: './weather-broadcast.component.html',
  styleUrls: ['./weather-broadcast.component.css']
})
export class WeatherBroadcastComponent implements OnInit {

  weather: any;
  public temp: number;
  public cityName: string;
  public weatherType: string;
  public humidity: number;

  constructor(private socketClient: SocketIOClientService) {
    this.cityName = environment.currentCity;
  }

  ngOnInit(): void {

    this.socketClient.listen('response-weather').subscribe((data) => {
      console.log(`weather received`);
      this.weather = data;
      this.cityName = this.weather.name;
      this.temp = this.weather.main.temp;
      this.weatherType = this.weather.weather[0].main;
      this.humidity = this.weather.main.humidity;
    });

    this.requestWeather();

  }

  requestWeather() {
    this.socketClient.emit('request', { 'type': 'weather', 'city': this.cityName });
  }


}
