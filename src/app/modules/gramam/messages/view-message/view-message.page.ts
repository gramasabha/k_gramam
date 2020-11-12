import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../../../../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message: Message;
  video: string;
  link: { icon: string; label: string; } & { url: string; icon?: string; label?: string; };

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = this.data.getMessageById(parseInt(id, 10));
    if (this.message.link) {
      this.link = Object.assign({ icon: 'enter', label: 'തുടരുക' }, this.message.link)
    }

  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
