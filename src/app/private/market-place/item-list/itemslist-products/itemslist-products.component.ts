import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

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

const ProductData: ListProductData[] = [
  { 
    image: '../../../../../assets/product4.png',
    title: 'School Bag Canvas with Art Kit',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 150,

    favorite: 'favorite_border',
    button_btn: 'Buy'
  },

  { 
    image: '../../../../../assets/product2.png',
    title: 'PARKER Vector Gold Pen',
    subtitle: '(Gold Nib) Fountain Pen',
    description: 'Body Color: Gold, Made of Gold Plated, Ink Color: Blue',

    reviews: 75,
    offers: 20,
    rating : 4.5,
    price: 12,

    favorite: 'favorite_border',
    button_btn: 'Buy'
  },

  { 
    image: '../../../../../assets/product1.png',
    title: 'Funblast Bag',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 100,

    favorite: 'favorite_border',
    button_btn: 'Buy'
  },

  { 
    image: '../../../../../assets/product3.png',
    title: 'Cello Colorup Kit',
    subtitle: '(Gold Nib) Fountain Pen',
    description: ' Body Color: Gold, Made of Gold Plated, Ink Color: Blue',

    reviews: 75,
    offers: 20,
    rating : 4.5,
    price: 18,

    favorite: 'favorite_border',
    button_btn: 'Buy'
  },

  { 
    image: '../../../../../assets/product4.png',
    title: 'School Bag Canvas with Art Kit',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 150,

    favorite: 'favorite_border',
    button_btn: 'Buy'
  },

  { 
    image: '../../../../../assets/product6.png',
    title: 'School Bag Canvas with Art Kit',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 150,

    favorite: 'favorite_border',
    button_btn: 'Bye'
  },

  { 
    image: '../../../../../assets/product7.png',
    title: 'School Bag Canvas with Art Kit',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 150,

    favorite: 'favorite_border',
    button_btn: 'Bye'
  },

  { 
    image: '../../../../../assets/product8.png',
    title: 'School Bag Canvas with Art Kit',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 150,

    favorite: 'favorite_border',
    button_btn: 'Bye'
  },

  
  { 
    image: '../../../../../assets/product3.png',
    title: 'School Bag Canvas with Art Kit',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 150,

    favorite: 'favorite_border',
    button_btn: 'Bye'
  },

  { 
    image: '../../../../../assets/product1.png',
    title: 'School Bag Canvas with Art Kit',
    subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
    description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

    reviews: 75,
    offers: 5,
    rating : 4.5,
    price: 150,

    favorite: 'favorite_border',
    button_btn: 'Bye'
  },
];
@Component({
  selector: 'app-itemslist-products',
  templateUrl: './itemslist-products.component.html',
  styleUrls: ['./itemslist-products.component.scss']
})
export class ItemslistProductsComponent implements OnInit {
  // listDatas = ProductData;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  listDatas: Observable<any>;
  dataSource: MatTableDataSource<ListProductData> = new MatTableDataSource<ListProductData>(ProductData);
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.listDatas = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
}
