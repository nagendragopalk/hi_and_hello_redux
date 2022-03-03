import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  totalprice: number;
  @Input() cart_details : PeriodicElement;
  
  public counter: number = 1;
  
  public increment() {
    this.counter += 1;
    this.totalprice = this.cart_details.price*this.counter;
    console.log(this.totalprice)
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
      this.totalprice = this.cart_details.price*this.counter;
      console.log(this.totalprice)
    }
  } 
  constructor() { 
    
  }

  ngOnInit(): void {
    this.totalprice = this.cart_details.price*this.counter;
  }
  @Output() sendCount : EventEmitter <number> = new EventEmitter<number>();
    public sendRecord(totalcartval : number ) {  
      this.sendCount.emit(totalcartval = this.totalprice);
    }
}
