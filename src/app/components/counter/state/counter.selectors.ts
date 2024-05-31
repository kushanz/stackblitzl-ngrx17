import { CounterInterface } from './counter.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCounterState = createFeatureSelector<CounterInterface>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
export const getTitle = createSelector(getCounterState, (state) => {
  return state.title;
});
