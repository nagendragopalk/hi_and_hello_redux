
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './reducer';

const greetingSelector = createFeatureSelector<fromStore.counterstore>(fromStore.greetingFeatureKey);

export const getGreeting = createSelector(greetingSelector, fromStore.selectGreeting);