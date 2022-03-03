import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  public delivery_addressDetails: FormGroup;

  country: string[] = [
    'US',
  ];

  states: string[] = [
    'New YORK',
  ];

  city: string[] = [
    'City',
  ];

  constructor() { }

  ngOnInit(): void {
    this.delivery_addressDetails = new FormGroup({
  
      firstname: new FormControl('', [Validators.required]),

      lastname: new FormControl('', [Validators.required]),

      address: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),

      city: new FormControl('', [Validators.required]),

      states: new FormControl('', [Validators.required]),

      country: new FormControl('', [Validators.required]),

      postalcode: new FormControl('', [ Validators.required, 
                                        Validators.minLength(6),
                                      ]),

      phone: new FormControl('', [Validators.required]),

    })
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.delivery_addressDetails.controls[controlName].hasError(errorName);
    }
  onClickSubmit(delivery_addressDetails: any){
    console.log('Card Details', delivery_addressDetails)
    // this.router.navigate(['/school-verify'])
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57))  {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  phoneFormat(input: any) {//returns (###) ###-####
    input = input.replace(/\D/g,'').substring(0,10); //Strip everything but 1st 10 digits
    var size = input.length;
    if (size>0) {input="("+input}
    if (size>3) {input=input.slice(0,4)+") "+input.slice(4)}
    if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
    return input;
}
}
