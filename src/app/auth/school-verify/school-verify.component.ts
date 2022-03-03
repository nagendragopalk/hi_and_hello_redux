import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-verify',
  templateUrl: './school-verify.component.html',
  styleUrls: ['./school-verify.component.scss']
})
export class SchoolVerifyComponent implements OnInit {

  verifyform: FormGroup;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.verifyform = new FormGroup({
      emailCode: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3})/)]),
    })
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.verifyform.controls[controlName].hasError(errorName);
    }

  onClickSubmit(verifyform: any){
    console.log('School Verify', verifyform)
    this.router.navigate(['/all-set'])
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
