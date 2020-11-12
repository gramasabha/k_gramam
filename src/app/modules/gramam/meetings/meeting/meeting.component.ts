import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConferenceData } from 'src/app/providers/conference-data';
import { DataService, Message } from 'src/app/services/data.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent implements OnInit {

  selectOptions = {
    header: 'Select a Location'
  };
  video: string;
  projects: any;
  chats: any[];

  constructor(
    private _sanitizer: DomSanitizer,
    private data: DataService,
    public confData: ConferenceData
  ) { }

  ngOnInit() {
    this.video = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-QiEne2nhW0') as string;
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages({ to: 'group' });
  }

  ionViewDidEnter() {
    this.confData.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }

  getChats() {
    return this.data.getChats();
  }
}
