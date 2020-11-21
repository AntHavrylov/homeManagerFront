import { Component, OnInit } from '@angular/core';
import { SocketIOClientService } from 'src/app/services/socketIOClient/socket-ioclient.service';

@Component({
  selector: 'app-home-salon',
  templateUrl: './home-salon.component.html',
  styleUrls: ['./home-salon.component.css']
})
export class HomeSalonComponent implements OnInit {

  receivedData: any;
  humidity:any;
  temperature:any;
  light : any;


  constructor(private socketClient: SocketIOClientService) { }

  ngOnInit(): void {
    this.socketClient.listen('serialPortData').subscribe((data) => {
      this.receivedData = data;
      this.humidity = this.receivedData.humidity;
      this.temperature = this.receivedData.temperature;
      this.light = this.receivedData.lightIn / 5;
    });
  }

  toggleLight(){
    this.socketClient.emit('request',{type:'toggleLight'});
  }

}
