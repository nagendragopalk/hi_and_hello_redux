import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-refer-teacher',
  templateUrl: './refer-teacher.component.html',
  styleUrls: ['./refer-teacher.component.scss']
})
export class ReferTeacherComponent implements OnInit {
  invitetechForm : FormGroup

  constructor() { }

  ngOnInit(): void {
    this.invitetechForm = new FormGroup({
      techname: new FormControl('', [Validators.required]),

      techemail: new FormControl('', [Validators.required, Validators.email]),
    })
  }
  onClickSubmit(invitetechForm: any){
    console.log('Forgot Password', invitetechForm)
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.invitetechForm.controls[controlName].hasError(errorName);
    }
}
