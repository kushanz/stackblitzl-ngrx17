import { PostInterface } from './post.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getPostState = createFeatureSelector<PostInterface>('posts');

export const getPostById = createSelector(getPostState, (state, props) => {
  return state.find((post) => post.id == props.id);
});
