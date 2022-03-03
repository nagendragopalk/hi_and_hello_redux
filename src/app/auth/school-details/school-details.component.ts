import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent implements OnInit {
  
  public schoolDetails: FormGroup;


  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.schoolDetails = new FormGroup({
  
      schoolState: new FormControl('', [Validators.required]),

      schoolName: new FormControl('', [Validators.required]),

      SchoolEmail: new FormControl('', [Validators.required, Validators.email]),

      principalName: new FormControl('', [Validators.required]),
      
      principalLastname: new FormControl('', [ Validators.required ]),

      principalEmail: new FormControl('', [ Validators.required, Validators.email ]),
    })
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.schoolDetails.controls[controlName].hasError(errorName);
    }

  onClickSubmit(schoolDetails: any){
    console.log('School Details', schoolDetails)
    // this.router.navigate(['/school-verify'])
  }

}
