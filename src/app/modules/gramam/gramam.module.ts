import { NgModule } from '@angular/core';

import { GramamRoutingModule } from './gramam-routing.module';
import { LayoutComponent } from './_layout/layout.component';
import { MenuComponent } from './_menu/menu.component';
import { MessagesComponent } from './messages/messages.component';
import { TextMessage } from './messages/message/message.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MeetingComponent } from './meetings/meeting/meeting.component';
import { ProjectsComponent } from './projects/projects.component';
import { IvidinganallaComponent } from './ividinganalla/ividinganalla.component';
import { ProjectComponent } from './projects/project/project.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDataComponent } from './articles/article-data/article-data.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    MessagesComponent, TextMessage,
    MeetingComponent,
    ProjectsComponent, ProjectComponent, ProjectDetailsComponent,
    ArticlesComponent, ArticleDataComponent,
    IvidinganallaComponent // 404
  ],
  imports: [
    SharedModule,
    GramamRoutingModule
  ]
})
export class GramamModule { }
