import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  item: string;
  price: number;
  quantity: string;
  total: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: '../../../../../assets/product4.png', price: 150, quantity: 'School Bag Canvas with Art Kit', total: 1.0079},
  {item: '../../../../../assets/product5.png', price: 12, quantity: 'PARKER Vector Gold Pen', total: 4.0026},
];

@Component({
  selector: 'app-adding-items',
  templateUrl: './adding-items.component.html',
  styleUrls: ['./adding-items.component.scss']
})
export class AddingItemsComponent implements OnInit {
  dataSources = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
  getTotalCost() {
    return this.dataSources.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
