import { Component, OnInit } from '@angular/core';
import { ConferenceData } from 'src/app/providers/conference-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(public confData: ConferenceData) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.confData.getProjects().subscribe((projects: any[]) => {
      this.projects = projects;
    });
  }

}
