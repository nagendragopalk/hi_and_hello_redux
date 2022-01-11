import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Brand } from 'src/app/services/market_services/market_modal';
import * as filterActions from './filter_actions';

export const FilterFeatureKey = 'flitter_data';

export interface FilterState extends EntityState<Brand> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Brand> = createEntityAdapter<Brand>();

export const initialState: FilterState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const filter_reducer = createReducer(
  initialState,
  on(filterActions.get_All_Brands,
    (state, action) => adapter.setAll(action.get_brands, {
        ...state,
        isLoading: false,
    })
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
