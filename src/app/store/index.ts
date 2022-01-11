import { ActionReducerMap } from "@ngrx/store";
import * as fromProduct from './product_store/reducer';
import * as fromCategory from './category/category_reducer';
import * as fromfliter from './filter_store/filter_reducer';
interface AppState {
  productState: fromProduct.ProductState;
  categoryState: fromCategory.CategoryState;
  fliterState: fromfliter.FilterState
}

export const reducers: ActionReducerMap<AppState> = {
    productState: fromProduct.Product_reducer,
    categoryState: fromCategory.category_reducer,
    fliterState: fromfliter.filter_reducer,
};
