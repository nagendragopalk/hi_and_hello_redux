import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ReviewSubmitPopupComponent } from './review-submit-popup/review-submit-popup.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-input',
  templateUrl: './review-input.component.html',
  styleUrls: ['./review-input.component.scss']
})
export class ReviewInputComponent implements OnInit {

  starRating = 0; 
  reviewForm : FormGroup
  dataimage:any;
  url: any;
  format: any;
  @ViewChild('fileInput') fileInput: ElementRef;
 fileAttr = 'Choose File';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      title: new FormControl('', [Validators.required]),

      dec: new FormControl('', [Validators.required]),

      name: new FormControl('', [Validators.required]),
    })
  }
  submitDialog() {
    const dialogRef = this.dialog.open(ReviewSubmitPopupComponent , {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onClickSubmit(reviewForm: any){
    console.log('Forgot Password', reviewForm)
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.reviewForm.controls[controlName].hasError(errorName);
    }
  
    // uploadFileEvt(imgFile: any) {
    //   console.log("hi")
    //   if (imgFile.target.files && imgFile.target.files[0]) {
    //     this.fileAttr = '';
    //     Array.from(imgFile.target.files).forEach((file: any) => {
    //       this.fileAttr += file.name + ' - ';
    //     });
  
    //     // HTML5 FileReader API
    //     let reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       let image = new Image();
    //       image.src = e.target.result;
    //       image.onload = rs => {
    //         let imgBase64Path = e.target.result;
    //         console.log(imgBase64Path);
    //         this.dataimage = imgBase64Path;
    //       };
    //     };
    //     reader.readAsDataURL(imgFile.target.files[0]);
        
    //     // Reset if duplicate image uploaded again
    //     this.fileInput.nativeElement.value = "";
    //   } else {
    //     this.fileAttr = 'Choose File';
    //   }
    // }
    
    uploadFileEvt(imgFile: any) {
      const file = imgFile.target.files && imgFile.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        if(file.type.indexOf('image')> -1){
          this.format = 'image';
        } else if(file.type.indexOf('video')> -1){
          this.format = 'video';
        }
        reader.onload = (imgFile) => {
          this.url = (<FileReader>imgFile.target).result;
        }
      }
    }
}
