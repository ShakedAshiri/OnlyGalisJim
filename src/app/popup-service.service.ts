import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {
  constructor(private dialog: MatDialog) { }

  private dialogRef: MatDialogRef<PopupComponent>

  openPopupDialog(popupData: PopupDataNode): Observable<any> {
    this.dialogRef = this.dialog.open(PopupComponent, {
      data: popupData
    });

    return this.dialogRef.afterClosed();
   }
}

export interface PopupDataNode {
  message: string;
  buttonText: {
    ok: string,
    cancel?: string
  }
}
