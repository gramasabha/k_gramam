import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, StepGuardGuard } from 'src/app/@shared/guards';
import { ArticlesComponent } from './articles/articles.component';
import { IvidinganallaComponent } from './ividinganalla/ividinganalla.component';
import { MeetingComponent } from './meetings/meeting/meeting.component';
import { MessagesComponent } from './messages/messages.component';
import { ProjectsComponent } from './projects/projects.component';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    canActivateChild: [StepGuardGuard],
    children: [
      {
        path: 'meetings',
        children: [
          {
            path: '',
            component: MeetingComponent
          },
          {
            path: ':id',
            component: MeetingComponent
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            component: ProjectsComponent
          }/* ,
          {
            path: ':id',
            component: ProjectDetailsComponent
          } */
        ]
      },
      {
        path: 'articles',
        children: [
          {
            path: '',
            component: ArticlesComponent
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            component: MessagesComponent
          },
          {
            path: ':id',
            loadChildren: () => import('./messages/view-message/view-message.module').then(m => m.ViewMessagePageModule)
          }
        ]
      }
    ]
  },
  {
    path: '**',
    // canActivate: [AuthGuard],
    component: IvidinganallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GramamRoutingModule { }
