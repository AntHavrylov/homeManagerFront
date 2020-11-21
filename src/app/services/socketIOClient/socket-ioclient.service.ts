import { Injectable } from '@angular/core';
import { from, Observable, Subscriber } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SocketIOClientService {

  socket: any;
  
  constructor() {
    this.socket = io(environment.socketEndpoint);
  }
  
  setupConnection() {
    debugger
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data) {
    this.socket.emit(eventName, data);
  }
}
