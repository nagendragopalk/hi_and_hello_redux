import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as filterStore from './filter_reducer';

const filterSelector = createFeatureSelector<filterStore.FilterState>(filterStore.FilterFeatureKey);

export const brand$ = createSelector(filterSelector, filterStore.selectAll);
