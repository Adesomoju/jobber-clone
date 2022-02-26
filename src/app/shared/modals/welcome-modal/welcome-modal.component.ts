import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class WelcomeModalComponent implements OnInit {

  data:any

  constructor(public dialogRef: MatDialogRef<WelcomeModalComponent>) { }

  ngOnInit(): void {
  }

  modalResponse(val?: any) {
    this.dialogRef.close({ data: val });
  }

}
