import { Component, OnInit, Input } from '@angular/core';
import { cart_Item } from 'src/app/services/market_services/cart_module';


@Component({
  selector: 'app-add-to-cart-detls',
  templateUrl: './add-to-cart-detls.component.html',
  styleUrls: ['./add-to-cart-detls.component.scss']
})

export class AddToCartDetlsComponent implements OnInit {
  @Input() cart_details : cart_Item;
  
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
    console.log(this.cart_details.Product.name)
  }

}
