import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card-details',
  templateUrl: './add-card-details.component.html',
  styleUrls: ['./add-card-details.component.scss'],

})
export class AddCardDetailsComponent implements OnInit {
  public cardDetails: FormGroup;
  // date = new FormControl(moment());
  hide = true;

  constructor() { }

  ngOnInit(): void {
    this.cardDetails = new FormGroup({
  
      card_number: new FormControl('', [Validators.required]),

      card_exp: new FormControl('', [Validators.required]),

      card_cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),

      card_name: new FormControl('', [Validators.required]),
    })
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.cardDetails.controls[controlName].hasError(errorName);
    }

  onClickSubmit(cardDetails: any){
    console.log('Card Details', cardDetails)
    // this.router.navigate(['/school-verify'])
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode != 64 && charCode > 91
      && (charCode < 48 || charCode > 57))  {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
