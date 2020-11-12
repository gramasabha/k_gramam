import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StepGuardGuard } from '@shared/guards';
import { HelpComponent } from './components/help/help.component';
import { IntroComponent } from './components/intro/intro.component';
import { StepperComponent } from './components/stepper/stepper.component';

const routes: Routes = [
  {
    path: 'intro',
    canActivate: [StepGuardGuard],
    component: IntroComponent
  },
  {
    path: 'help',
    canActivate: [StepGuardGuard],
    component: HelpComponent
  },
  {
    path: 'ente/gramam',
    loadChildren: () => import('./modules/gramam/gramam.module').then(m => m.GramamModule)
  },
  {
    path: 'step',
    component: StepperComponent,
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'help'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
