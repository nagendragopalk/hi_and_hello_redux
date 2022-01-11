import { createAction, props } from '@ngrx/store';
import { Brand, Color } from 'src/app/services/market_services/market_modal';


  export const get_All_Brands = createAction(
    '[Product/API] List All Brands',
    props<{ get_brands: Brand[] }>()
  );
  export const Load_Brands_Products = createAction(
    'Request Load Brand Products',
  );
  export const get_All_Colors = createAction(
    '[Product/API] List All Brands',
    props<{ get_colors: Color[] }>()
  );
  export const Load_Colors_Products = createAction(
    'Request Load Brand Products',
  );