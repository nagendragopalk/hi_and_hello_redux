import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-tech',
  templateUrl: './invite-tech.component.html',
  styleUrls: ['./invite-tech.component.scss']
})
export class InviteTechComponent implements OnInit {
  invitetechForm : FormGroup
  value: `https://invite.frizzmo.com`;
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
