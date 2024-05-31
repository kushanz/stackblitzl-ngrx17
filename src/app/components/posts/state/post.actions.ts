import { createAction, props } from '@ngrx/store';
import { PostInterface } from './post.model';

export const ADD_POST_ACTION = '[post page] add post';
export const UPDATE_POST_ACTION = '[post page] update post';
export const addPost = createAction(ADD_POST_ACTION, props<PostInterface>());
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<PostInterface>()
);
export const deletePost = createAction(
  '[post page] delete post',
  props<PostInterface>()
);
