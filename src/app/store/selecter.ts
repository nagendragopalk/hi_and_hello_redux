import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './reducer';

import * as categoryStore from './category/category_reducer';
// import * as brandStore from './category/brand_reducer';

const categorySelector = createFeatureSelector<categoryStore.CategoryState>(categoryStore.categorysFeatureKey);

const productsSelector = createFeatureSelector<fromStore.ProductState>(fromStore.productsFeatureKey);

// const brandsSelector =  createFeatureSelector<brandStore.BrandState>(brandStore.brandsFeatureKey);

export const isLoading = createSelector(productsSelector, (state: fromStore.ProductState) => state.isLoading);

export const products = createSelector(productsSelector, fromStore.selectAll);

export const error = createSelector(productsSelector,  (state: fromStore.ProductState) => state.error);

export const pageCountSize = createSelector(productsSelector,  (state: fromStore.ProductState) => state.pagesize);

export const currentPageCount = createSelector(productsSelector,  (state: fromStore.ProductState) => state.currentPage);

export const totalCount = createSelector(productsSelector,  (state: fromStore.ProductState) => state.totalRows);

export const catogory$ = createSelector(categorySelector, categoryStore.selectAll);

// export const brands$ = createSelector(brandsSelector, brandStore.selectAll);


