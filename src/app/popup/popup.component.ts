import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions, MatDialogModule, MatDialog } from '@angular/material/dialog';

import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

interface DialogData {
  textContent: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  message: string = ""
  cancelButtonText = ""
  confirmButtonText = "Yes"
  //okEvent
/*[textContent]="adText"
   [noButton]="true"
  (okEvent)="levelService.nextLevel(0  )"
  (noEvent)="closeAd() */


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PopupComponent>) {

      if(data){
        this.message = data.message || this.message;
        if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel;
        }
      }
  }

  clickBtn(status: boolean) {
    let result;
    if(status)
      result = true;
    else
      result = false;
    this.dialogRef.close(result);
}
}
