import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { Observable, take } from 'rxjs';
import { map } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {
  constructor(private dialog: MatDialog) { }

  private dialogRef: MatDialogRef<PopupComponent>

  openPopupDialog(popupData: PopupDataNode) {
    this.dialogRef = this.dialog.open(PopupComponent, {
      data: popupData
    });
   }

   public dialogClosedSub(): Observable<any> {

    return this.dialogRef.afterClosed();

    /*return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));*/

    //return this.dialogRef.afterClosed().pipe(map((res:any)=>{return res});
  }
}

export interface PopupDataNode {
  message: string;
  buttonText: {
    ok: string,
    cancel: string
  }
}
