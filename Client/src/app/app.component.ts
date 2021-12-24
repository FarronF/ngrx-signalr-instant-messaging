import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-signalr-instant-messaging';

  constructor(public signalRService: SignalRService, private http: HttpClient) { }
  ngOnInit() {
    console.log('Faz - ngOnInit');
    this.signalRService.startConnection();
    this.signalRService.addSendMessageListener();   
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:5001/api/instantMessaging')
      .subscribe(res => { 
        console.log('Faz - API call', res);
      })
  }
}
