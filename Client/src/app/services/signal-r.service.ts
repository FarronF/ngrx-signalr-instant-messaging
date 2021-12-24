import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

import { MessageModel } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public messages: MessageModel[] = [];
  private hubConnection: signalR.HubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/instantMessaging')
    .build();
  
  public startConnection = () => {
    console.log('Faz - startConnection');
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addSendMessageListener = () => {
    console.log('Faz - addSendMessageListener');
    this.hubConnection.on('sendmessage', (data) => {
      console.log(data);
    });
  }
}