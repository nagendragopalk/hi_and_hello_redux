import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  item: string;
  price: number;
  quantity: string;
  total: number;

}

@Component({
  selector: 'app-add-to-cart-detls',
  templateUrl: './add-to-cart-detls.component.html',
  styleUrls: ['./add-to-cart-detls.component.scss']
})

export class AddToCartDetlsComponent implements OnInit {
  @Input() cart_details : PeriodicElement;
  
  public counter: number = 1;
  
  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
