import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { DialogData } from '../my-account-details/address-book-card/address-book-card.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    // public dialogRef: MatDialogRef<DeleteDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
