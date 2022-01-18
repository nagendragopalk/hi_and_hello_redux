import { createAction, props } from '@ngrx/store';
import { cart_Item } from 'src/app/services/market_services/cart_module';


  export const Cart_Action = createAction(
    '[cart/API] List Cart Data',
    props<{ cart_items: cart_Item[] }>()
  );
  export const Load_Cart_Action = createAction(
    'Request Load Cart Data',
  );