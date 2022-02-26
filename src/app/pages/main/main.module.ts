import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MatSliderModule } from '@angular/material/slider'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/modals/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    SharedModule,
    FormsModule
  ]
})
export class MainModule { }
