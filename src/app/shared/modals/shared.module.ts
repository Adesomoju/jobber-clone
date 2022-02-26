import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { PersonalInfoModalComponent } from "./personal-info-modal/personal-info-modal.component";


@NgModule({
    declarations: [
    WelcomeModalComponent,
    PersonalInfoModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
    ],
    exports: [
      WelcomeModalComponent,
      PersonalInfoModalComponent
     ],
    providers: [],
    entryComponents:[]
})



export class SharedModule { }