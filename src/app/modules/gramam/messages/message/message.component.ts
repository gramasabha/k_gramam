import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Message } from 'src/app/services/data.service';

@Component({
  selector: 'text-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class TextMessage implements OnInit {

  @Input() message: Message;
  video: string;

  constructor() { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

}
