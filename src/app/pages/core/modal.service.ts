import {Injectable} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonalInfoModalComponent } from 'src/app/shared/modals/personal-info-modal/personal-info-modal.component';
import { WelcomeModalComponent } from 'src/app/shared/modals/welcome-modal/welcome-modal.component';


@Injectable({
    providedIn: 'root'
})

export class ModalService {

    constructor(
		private matDialog: MatDialog
	) { }

    ConfirmActionModal(data: any){
		let dialogRef: MatDialogRef<WelcomeModalComponent>;
		dialogRef = this.matDialog.open(WelcomeModalComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.disableClose = true;
		dialogRef.updateSize('400px');
		return dialogRef.afterClosed();
	}

	OtherInfoModal(data: any){
		let dialogRef: MatDialogRef<PersonalInfoModalComponent>;
		dialogRef = this.matDialog.open(PersonalInfoModalComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.disableClose = true;
        dialogRef.addPanelClass(['add-extra']);
		dialogRef.updateSize('650px');
		return dialogRef.afterClosed();
	}

}