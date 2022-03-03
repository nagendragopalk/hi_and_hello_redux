import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchValidator } from './Validation/confirmed.validator';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'SIGN UP'},
]
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  btn_infos = ButtonInfo;

  signUpForm: any;

  signInForm: any;

  signinpasswordhide = true;
  hide = true;
  passwordhide = true;
  conformpasswordhide = true;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.signUpForm = new FormGroup({
  
        firstName: new FormControl('', [Validators.required]),
  
        lastName: new FormControl('', [Validators.required,]),
  
        password: new FormControl('', [ Validators.required,    
                                        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),
                                        Validators.minLength(8),
                                        Validators.maxLength(20),
                                        matchValidator('confirmPassword', true)]),
        confirmpassword: new FormControl('', [
                                          Validators.required,
                                          matchValidator('password')
        ]),
        // hideRequiredControl: new FormControl(false),
      })
  
      this.signInForm = new FormGroup({
  
        signInemail: new FormControl('', [Validators.required, Validators.email]),
  
        signInpassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),
        Validators.minLength(8),
        Validators.maxLength(20)]),
      })
  }
  public SignUpError = (controlName: string, errorName: string) =>{
    return this.signUpForm.controls[controlName].hasError(errorName);
    }
  public SignInError = (controlName: string, errorName: string) =>{
    return this.signInForm.controls[controlName].hasError(errorName);
    }

  onClicksignUpSubmit(Updata: any){
    console.log('sign Up', Updata)
    // this.router.navigate(['/school-details'])
  }
  onClicksignInSubmit(signInForm: any){
    console.log('sign In', signInForm)
    // this.router.navigate(['/dashboard'])
  }
}
