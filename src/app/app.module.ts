import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WeatherBroadcastComponent } from './components/weather-broadcast/weather-broadcast.component';


//services 
import {SocketIOClientService} from './services/socketIOClient/socket-ioclient.service';




import { from } from 'rxjs';
import { HomeSalonComponent } from './components/home-salon/home-salon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    WeatherBroadcastComponent,
    HomeSalonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    SocketIOClientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
