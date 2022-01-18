import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, delay } from 'rxjs/operators';
import { ProductService } from 'src/app/services/market_services/product_list.services';
import { Cart_Action, Load_Cart_Action } from './cart_actions';
 
@Injectable()
export class Category_Effects {

  constructor( private actions$: Actions, private productServices: ProductService ) {}

  getcategorys$ = createEffect(() => this.actions$.pipe(
    ofType(Load_Cart_Action),
    switchMap(action => this.productServices.cart_data().pipe(
      map (data => Cart_Action({ cart_items : data.rows }))
      ))
    )
  );
}