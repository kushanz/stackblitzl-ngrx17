import { intialState } from './counter.state';
import { decrement, increment, reset, setTitle } from './counter.actions';
import { createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    return { ...state, counter: 0 };
  }),
  on(setTitle, (state) => {
    return { ...state, title: 'Title Id ==>  ' + Math.random() };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
