import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.scss']
})
export class WalletHistoryComponent implements OnInit {
  overViewinfos = ViewData;

  constructor() { }

  ngOnInit(): void {
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
}
