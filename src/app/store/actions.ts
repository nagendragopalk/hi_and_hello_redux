import { createAction, props } from '@ngrx/store';
import { Category, Product } from '../services/market_services/market_modal';


export const Load_All_Products = createAction(
    '[Product/API] Request Load Products',
    props<{ pageSize: number; CurentPage: number; }>()
  );
export const get_All_Products = createAction(
    '[Product/API] Load Products',
    props<{ get_all_products: Product[], totalRows: number}>()
  );
  export const get_All_Category = createAction(
    '[Product/API] List All category',
    props<{ get_category: Category[] }>()
  );
  export const Load_Category_Products = createAction(
    'Request Load Category Products',
  );
  // export const get_All_Brands = createAction(
  //   '[Product/API] List All category',
  //   props<{ get_brands: Brand[] }>()
  // );
  // export const Load_Brand_Products = createAction(
  //   'Request Load Brand Products',
  // );
