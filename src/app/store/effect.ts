import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, delay } from 'rxjs/operators';
import { ProductService } from '../services/market_services/product_list.services';
import { get_All_Category, get_All_Products, Load_All_Products, Load_Category_Products } from './actions';
 
@Injectable()
export class Product_Effects {

  constructor( private actions$: Actions, private productServices: ProductService ) {}

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(Load_All_Products),
    switchMap(action => this.productServices.getAllProducts({page : action.CurentPage +1, pagesize: action.pageSize}).pipe(
      delay(500),
      map (data => get_All_Products({ get_all_products: data.rows, totalRows: data.count}))
      ))
    )
  );
  getcategorys$ = createEffect(() => this.actions$.pipe(
    ofType(Load_Category_Products),
    switchMap(action => this.productServices.getCategory().pipe(
      map (data => get_All_Category({ get_category: data}))
      ))
    )
  );

  // getbrands$ = createEffect(() => this.actions$.pipe(
  //   ofType(Load_Brand_Products),
  //   switchMap(action => this.productServices.getBrand().pipe(
  //     map (data => get_All_Brands({ get_brands: data}))
  //     ))
  //   )
  // );
}