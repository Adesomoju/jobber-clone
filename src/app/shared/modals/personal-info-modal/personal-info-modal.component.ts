import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-personal-info-modal',
  templateUrl: './personal-info-modal.component.html',
  styleUrls: ['./personal-info-modal.component.scss', '../../../pages/main/landing-page/landing-page.component.scss']
})
export class PersonalInfoModalComponent implements OnInit {

  data:any

  constructor(public dialogRef: MatDialogRef<PersonalInfoModalComponent>) { }

  ngOnInit(): void {
  }

  modalResponse(val?: any) {
    this.dialogRef.close({ data: val });
  }

}
