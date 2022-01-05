import { Component, OnInit, Input } from '@angular/core';

export interface ListProductData {
  image: string;
  title: string;
  subtitle: string;
  description: string;

  reviews: number;
  offers: number;
  rating : number;
  price: number;

  favorite: string;
  button_btn: string;
}

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input() listProduct : ListProductData;

  constructor() { }

  ngOnInit(): void {
  }

}
