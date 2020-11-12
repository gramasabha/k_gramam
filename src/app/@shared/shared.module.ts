import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareSocializeComponent } from './share-socialize/share-socialize.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards';
import { StepGuardGuard } from './guards/step-guard.guard';


@NgModule({
  declarations: [ShareSocializeComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareSocializeComponent
  ],
  providers: [
    AuthGuard, StepGuardGuard
  ]
})
export class SharedModule { }
