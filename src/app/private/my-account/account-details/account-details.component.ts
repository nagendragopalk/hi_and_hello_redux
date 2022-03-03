import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'details-btn', btn_name: 'Update'},
]
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  btn_infos = ButtonInfo;
  format: any;
  url: any;
  EditPersonalDetails: FormGroup;

  EditEmailDetails: FormGroup;

  EditschoolEmailDetails: FormGroup;

  passwordchange: FormGroup;

  hide = true;

  showEdit: boolean = false ;

  showprslEmail: boolean = false ;

  showschoolEmail: boolean = false ;

  showPassword: boolean = false ;

  // dataimage:any;

  dataimage = '';


   @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  // isnotShow

  toggle_nameShow() {

    this.showEdit = ! this.showEdit;

  }

  toggle_prslShow() {

    this.showprslEmail = ! this.showprslEmail;

  }

  toggle_schollShow() {

    this.showschoolEmail = ! this.showschoolEmail;

  }

  toggle_passwordShow() {

    this.showPassword = ! this.showPassword;

  }
  constructor() { }

  ngOnInit(): void {
    this.EditPersonalDetails = new FormGroup({
  
      firstname: new FormControl('', [Validators.required]),

      lastname: new FormControl('', [Validators.required]),

      date: new FormControl('', ),

    })
    this.EditEmailDetails = new FormGroup({
  
      email: new FormControl('', [Validators.required, Validators.email]),

    })
    this.EditschoolEmailDetails = new FormGroup({
  
      shoolemail: new FormControl('', [Validators.required, Validators.email]),

    })
    this.passwordchange = new FormGroup({
  
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),]),

    })
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.EditPersonalDetails.controls[controlName].hasError(errorName);
    }
  public emailErrors = (controlName: string, errorName: string) =>{
    return this.EditEmailDetails.controls[controlName].hasError(errorName);
    }
  public schoolemailErrors = (controlName: string, errorName: string) =>{
    return this.EditschoolEmailDetails.controls[controlName].hasError(errorName);
    }
  public passwordError = (controlName: string, errorName: string) =>{
    return this.passwordchange.controls[controlName].hasError(errorName);
    }
  

  onClickSubmit(cardDetails: any){
    console.log('Card Details', cardDetails)
    // this.router.navigate(['/school-verify'])
  }

  // uploadFileEvt(imgFile: any) {
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
    if (imgFile.target.files && imgFile.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(imgFile.target.files[0]); // read file as data url

      reader.onload = (imgFile: any) => { // called once readAsDataURL is completed
        this.dataimage = imgFile.target.result;
      }
    }
  }
}
