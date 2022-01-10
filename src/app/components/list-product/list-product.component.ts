import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/services/market_services/market_modal';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ListProductComponent implements OnInit {
  @Input() listProduct : Product;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  imgurl = "http://192.168.1.3:3000/images/products/";

  constructor() { }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  ngOnInit(): void {
  }

}
