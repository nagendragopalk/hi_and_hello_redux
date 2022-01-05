import { Component, OnInit } from '@angular/core';
// import * as fromFavs from "../../store";
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { decrement, ShowGreeting, ShowDefaltGreeting } from 'src/app/store/actions';
import { counterstore } from 'src/app/store/reducer';
import {getGreeting } from 'src/app/store/selecter';
// export interface ListProductData {
//   image: string;
//   title: string;
//   subtitle: string;
//   description: string;

//   reviews: number;
//   offers: number;
//   rating : number;
//   price: number;

//   favorite: string;
//   button_btn: string;
// }

// const ProductData: ListProductData[] = [
//   { 
//     image: '../../../../../assets/product4.png',
//     title: 'School Bag Canvas with Art Kit',
//     subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//     description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//     reviews: 75,
//     offers: 5,
//     rating : 4.5,
//     price: 150,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product2.png',
//     title: 'PARKER Vector Gold Pen',
//     subtitle: '(Gold Nib) Fountain Pen',
//     description: 'Body Color: Gold, Made of Gold Plated, Ink Color: Blue',

//     reviews: 75,
//     offers: 20,
//     rating : 4.5,
//     price: 12,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product1.png',
//     title: 'Funblast Bag',
//     subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//     description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//     reviews: 75,
//     offers: 5,
//     rating : 4.5,
//     price: 100,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product3.png',
//     title: 'Cello Colorup Kit',
//     subtitle: '(Gold Nib) Fountain Pen',
//     description: ' Body Color: Gold, Made of Gold Plated, Ink Color: Blue',

//     reviews: 75,
//     offers: 20,
//     rating : 4.5,
//     price: 18,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product4.png',
//     title: 'School Bag Canvas with Art Kit',
//     subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//     description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//     reviews: 75,
//     offers: 5,
//     rating : 4.5,
//     price: 150,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

  // { 
  //   image: '../../../../../assets/product6.png',
  //   title: 'School Bag Canvas with Art Kit',
  //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
  //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

  //   reviews: 75,
  //   offers: 5,
  //   rating : 4.5,
  //   price: 150,

  //   favorite: 'favorite_border',
  //   button_btn: 'Bye'
  // },

  // { 
  //   image: '../../../../../assets/product7.png',
  //   title: 'School Bag Canvas with Art Kit',
  //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
  //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

  //   reviews: 75,
  //   offers: 5,
  //   rating : 4.5,
  //   price: 150,

  //   favorite: 'favorite_border',
  //   button_btn: 'Bye'
  // },

  // { 
  //   image: '../../../../../assets/product8.png',
  //   title: 'School Bag Canvas with Art Kit',
  //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
  //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

  //   reviews: 75,
  //   offers: 5,
  //   rating : 4.5,
  //   price: 150,

  //   favorite: 'favorite_border',
  //   button_btn: 'Bye'
  // },

  
  // { 
  //   image: '../../../../../assets/product3.png',
  //   title: 'School Bag Canvas with Art Kit',
  //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
  //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

  //   reviews: 75,
  //   offers: 5,
  //   rating : 4.5,
  //   price: 150,

  //   favorite: 'favorite_border',
  //   button_btn: 'Bye'
  // },

  // { 
  //   image: '../../../../../assets/product1.png',
  //   title: 'School Bag Canvas with Art Kit',
  //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
  //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

  //   reviews: 75,
  //   offers: 5,
  //   rating : 4.5,
  //   price: 150,

  //   favorite: 'favorite_border',
  //   button_btn: 'Bye'
  // },
// ];

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  greeting$: Observable<string>

  constructor(private store: Store<counterstore>) {
    this.greeting$ = this.store.select(getGreeting);
    console.log(this.greeting$)
  }
  increment() {
    this.store.dispatch(ShowGreeting());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(ShowDefaltGreeting());
  }

  ngOnInit(): void {
  }
}
