import { ActionReducerMap } from "@ngrx/store";
// import { CategoryState, category_reducer } from "./category/category_reducer";
// import { ProductState, Product_reducer } from "./reducer";
import * as fromProduct from './reducer';
import * as fromCategory from './category/category_reducer';
// import * as fromBrand from "./category/brand_reducer";



interface AppState {
  productState: fromProduct.ProductState;
  categoryState: fromCategory.CategoryState;
  // brandstate: fromBrand.BrandState;
}

export const reducers: ActionReducerMap<AppState> = {
    productState: fromProduct.Product_reducer,
    categoryState: fromCategory.category_reducer,
    // brandstate: fromBrand.brand_reducer
};
