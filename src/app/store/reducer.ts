import { Action, createReducer, on } from '@ngrx/store';
import { ShowGreeting, decrement, ShowDefaltGreeting } from './actions';

export const greetingFeatureKey = "greeting";

export interface counterstore { 
    greeting: string;
}
 
export const initialState: counterstore  = {
    greeting: "hi"
};

const _counterReducer = createReducer(
  initialState,
  on(ShowGreeting, (state) => ({...state,
    greeting: "hello world"
})),
  on(decrement, (state) => ({...state,})),


  on(ShowDefaltGreeting, (state) => ({...state,
        greeting: initialState.greeting
})),
);

export const selectGreeting= (state: counterstore) => state.greeting;

 
export function counterReducer(state: counterstore | undefined, action: Action) {
  return _counterReducer(state, action);
}