import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';

export interface overviewData {
  icon: string;
  title: string;
  price: string;
  iconcol: string;
}

const ViewData: overviewData[] = [
  { icon: 'attach_money', title: 'Wallet Balance', price: "100 FC", iconcol: 'view-btn'},
  { icon: 'money_off', title: 'Amount Used', price: "10 FC",  iconcol: 'view-btn'},
  { icon: 'account_balance_wallet', title: 'Remaining in wallet', price: "90 FC",  iconcol: 'view-btn'},
  { icon: 'shopping_cart', title: 'Total Orders', price: "2",  iconcol: 'view-btn'},
];
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  overViewinfos = ViewData;
  activeState = 'Draft';

  states = [
    'Last 7 Days',
    'Last 30 Days',
  ]
  private toggle: boolean = false;
  @Input() color: string = 'red';

  range = new FormGroup({
    start: new FormControl(this.datepipe.transform((new Date), 'MM/dd/yyyy')),
    end: new FormControl(),
  });
 


  constructor(public datepipe: DatePipe) { 
  
  }

  ngOnInit(): void {
  }
  setStateAsActive(state: any) {
    this.activeState = state;
      let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy');
  
    console.log(currentDateTime);
  }
}
