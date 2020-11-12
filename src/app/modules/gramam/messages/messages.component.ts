import { Component, OnInit } from '@angular/core';
import { DataService, Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  constructor(private data: DataService) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
