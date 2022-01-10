import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../services/market_services/market_modal';
import * as ProductActions from './actions';

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product> {
  isLoading: boolean;
  error: string | null;
  pagesize: number;
  currentPage: number;
  totalRows: number;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  isLoading: true,
  error: null,
  pagesize : 0,
  currentPage : 0,
  totalRows : 0,
});

export const Product_reducer = createReducer(
  initialState,
  on(ProductActions.get_All_Products,
    (state, action) => adapter.setAll(action.get_all_products, {
        ...state,
        isLoading: false,
        totalRows: action.totalRows
    })
  ),
  on(ProductActions.Load_All_Products,
    (state, action) => adapter.setAll([], {
      ...state,
      isLoading: true,
      currentPage: action.CurentPage,
      pagesize: action.pageSize,
    })
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
