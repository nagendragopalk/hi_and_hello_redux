import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  ForgotForm : any
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ForgotForm = new FormGroup({
      emailForgot: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onClickSubmit(ForgotForm: any){
    console.log('Forgot Password', ForgotForm)
    this.router.navigate(['/reset-email'])
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.ForgotForm.controls[controlName].hasError(errorName);
    }
}
